import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "website-v2-a1515.firebaseapp.com",
  projectId: "website-v2-a1515",
  storageBucket: "website-v2-a1515.firebasestorage.app",
  messagingSenderId: "495244502707",
  appId: "1:495244502707:web:c5888d25df4f92dc05f2c6",
  measurementId: "G-V9QD5EQHY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
