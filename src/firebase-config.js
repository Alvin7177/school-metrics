/**
 * Firebase 웹 앱 설정 (콘솔에서 등록한 값)
 * Firestore Database + firestore.rules 배포가 되어 있어야 기록이 저장됩니다.
 */
export const firebaseConfig = {
  apiKey: "AIzaSyB7YJBfYa9zGnUvLD4DFgR5KLiNKuluHJM",
  authDomain: "school-metrics-fdee3.firebaseapp.com",
  projectId: "school-metrics-fdee3",
  storageBucket: "school-metrics-fdee3.firebasestorage.app",
  messagingSenderId: "378255554733",
  appId: "1:378255554733:web:01b06dca5b5307860eae24",
  measurementId: "G-0BL416S3QD",
};

export function isFirebaseConfigured() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);
}
