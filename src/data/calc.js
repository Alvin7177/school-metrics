import {
  calcWeightedAverage,
  calcProjection,
} from "./grades.js";
import {
  roundScore,
  scoreToLetter,
  letterLabel,
  calcNeededForNextLetter,
  calcMinToConfirmLetter,
} from "./grading.js";

export { calcWeightedAverage, calcProjection };

export function formatResultAverage(average) {
  const rounded = roundScore(average);
  return { raw: average, rounded, display: `${rounded}점` };
}

export function buildResultSummary(items, scores, subject) {
  const average = calcWeightedAverage(items, scores);
  if (average === null) return null;

  const { rounded } = formatResultAverage(average);
  const letter = scoreToLetter(rounded, subject);
  const projection = calcProjection(items, scores);
  const projRounded = roundScore(projection.average);
  const needed = calcNeededForNextLetter(items, scores, average, subject);
  const confirmMin = calcMinToConfirmLetter(items, scores, letter, subject);

  return {
    average,
    rounded,
    letter,
    projection,
    projRounded,
    projLetter: scoreToLetter(projRounded, subject),
    needed,
    confirmMin,
  };
}
