import { firebaseConfig, isFirebaseConfigured } from "./firebase-config.js";

const FIREBASE_APP = "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
const FIREBASE_FS = "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

let db = null;
let initPromise = null;

export { isFirebaseConfigured };

export async function getDb() {
  if (!isFirebaseConfigured()) return null;
  if (db) return db;
  if (!initPromise) {
    initPromise = (async () => {
      const { initializeApp, getApps } = await import(FIREBASE_APP);
      const { getFirestore } = await import(FIREBASE_FS);
      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
      db = getFirestore(app);
      return db;
    })().catch((err) => {
      console.warn("[firebase] init failed", err);
      initPromise = null;
      db = null;
      return null;
    });
  }
  return initPromise;
}

export async function cloudAddLog(entry) {
  const database = await getDb();
  if (!database) return null;
  const { collection, addDoc, serverTimestamp } = await import(FIREBASE_FS);
  const payload = { ...entry };
  // Firestore rejects undefined
  Object.keys(payload).forEach((k) => {
    if (payload[k] === undefined) delete payload[k];
  });
  const docRef = await addDoc(collection(database, "activityLogs"), {
    ...payload,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function cloudFetchLogs(limitCount = 200) {
  const database = await getDb();
  if (!database) return [];
  const { collection, query, orderBy, limit, getDocs } = await import(FIREBASE_FS);
  const q = query(
    collection(database, "activityLogs"),
    orderBy("at", "desc"),
    limit(limitCount)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function cloudClearLogs() {
  const database = await getDb();
  if (!database) return 0;
  const { collection, getDocs, deleteDoc, query, limit } = await import(FIREBASE_FS);
  let deleted = 0;
  for (;;) {
    const snap = await getDocs(query(collection(database, "activityLogs"), limit(100)));
    if (snap.empty) break;
    await Promise.all(snap.docs.map((d) => deleteDoc(d.ref)));
    deleted += snap.size;
    if (snap.size < 100) break;
  }
  return deleted;
}

export async function cloudSaveSettings(settings) {
  const database = await getDb();
  if (!database) return false;
  const { doc, setDoc, serverTimestamp } = await import(FIREBASE_FS);
  const payload = { ...settings };
  Object.keys(payload).forEach((k) => {
    if (payload[k] === undefined) delete payload[k];
  });
  await setDoc(doc(database, "adminSettings", "global"), {
    ...payload,
    updatedAt: serverTimestamp(),
  });
  return true;
}

export async function cloudLoadSettings() {
  const database = await getDb();
  if (!database) return null;
  const { doc, getDoc } = await import(FIREBASE_FS);
  const snap = await getDoc(doc(database, "adminSettings", "global"));
  if (!snap.exists()) return null;
  const data = snap.data();
  delete data.updatedAt;
  return data;
}
