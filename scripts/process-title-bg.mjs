import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, "../public/title-bg.png");
const output = input;

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? (0xedb88320 ^ (c >>> 1)) : c >>> 1;
    }
  }
  return (c ^ 0xffffffff) >>> 0;
}

function readChunks(buffer) {
  let offset = 8;
  const chunks = [];
  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString("ascii", offset + 4, offset + 8);
    const data = buffer.subarray(offset + 8, offset + 8 + length);
    chunks.push({ type, data });
    offset += 12 + length;
  }
  return chunks;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

function unfilter(raw, width, height, bpp) {
  const stride = width * bpp;
  const out = Buffer.alloc(height * stride);
  let rawPos = 0;
  for (let y = 0; y < height; y++) {
    const filter = raw[rawPos++];
    for (let x = 0; x < stride; x++) {
      const i = y * stride + x;
      const left = x >= bpp ? out[i - bpp] : 0;
      const up = y > 0 ? out[i - stride] : 0;
      const upLeft = y > 0 && x >= bpp ? out[i - stride - bpp] : 0;
      let val = raw[rawPos++];
      switch (filter) {
        case 1:
          val = (val + left) & 0xff;
          break;
        case 2:
          val = (val + up) & 0xff;
          break;
        case 3:
          val = (val + ((left + up) >> 1)) & 0xff;
          break;
        case 4:
          val = (val + paeth(left, up, upLeft)) & 0xff;
          break;
        default:
          break;
      }
      out[i] = val;
    }
  }
  return out;
}

function filterNone(pixels, width, height, bpp) {
  const stride = width * bpp;
  const raw = Buffer.alloc(height * (1 + stride));
  let rawPos = 0;
  for (let y = 0; y < height; y++) {
    raw[rawPos++] = 0;
    pixels.copy(raw, rawPos, y * stride, y * stride + stride);
    rawPos += stride;
  }
  return raw;
}

function isGreenLine(r, g, b) {
  if (g < 55) return false;
  if (g > r + 18 && g > b + 12) return true;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return g >= 80 && max - min >= 35 && g === max;
}

function processPixels(data, width, height, colorType) {
  const bpp = colorType === 6 ? 4 : 3;
  const pixels = unfilter(data, width, height, bpp);
  for (let i = 0; i < pixels.length; i += bpp) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    if (isGreenLine(r, g, b)) {
      pixels[i] = 0;
      pixels[i + 1] = Math.min(255, g + 30);
      pixels[i + 2] = 0;
      if (bpp === 4) pixels[i + 3] = 255;
    } else {
      pixels[i] = 0;
      pixels[i + 1] = 0;
      pixels[i + 2] = 0;
      if (bpp === 4) pixels[i + 3] = 255;
    }
  }
  return filterNone(pixels, width, height, bpp);
}

const buffer = fs.readFileSync(input);
if (buffer.toString("ascii", 1, 4) !== "PNG") {
  throw new Error("Not a PNG file");
}

const chunks = readChunks(buffer);
const ihdr = chunks.find((c) => c.type === "IHDR");
if (!ihdr) throw new Error("Missing IHDR");

const width = ihdr.data.readUInt32BE(0);
const height = ihdr.data.readUInt32BE(4);
const colorType = ihdr.data[9];

const idatParts = chunks.filter((c) => c.type === "IDAT").map((c) => c.data);
const compressed = Buffer.concat(idatParts);
const raw = zlib.inflateSync(compressed);
const filtered = processPixels(raw, width, height, colorType);
const newIdat = zlib.deflateSync(filtered, { level: 9 });

const outChunks = [
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  makeChunk("IHDR", ihdr.data),
  makeChunk("IDAT", newIdat),
  makeChunk("IEND", Buffer.alloc(0)),
];

fs.writeFileSync(output, Buffer.concat(outChunks));
console.log(`Processed ${width}x${height} -> ${output}`);
