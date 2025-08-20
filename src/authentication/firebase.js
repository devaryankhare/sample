import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAl0WybBoYOJDtOmtwqkL7fZT1pgleJsy4",
  authDomain: "login-76b54.firebaseapp.com",
  projectId: "login-76b54",
  storageBucket: "login-76b54.firebasestorage.app",
  messagingSenderId: "550088587937",
  appId: "1:550088587937:web:2055e314c42342d8490ee0",
  measurementId: "G-Z0HWTPF3JE",
};

// ✅ Initialize Firebase app only once
const app = initializeApp(firebaseConfig);

// ✅ Export instances
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
