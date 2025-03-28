import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQMUIUHZ3hoXeAoW9w38KKKp7kRwhn1z0",
  authDomain: "furniture-a4ef3.firebaseapp.com",
  projectId: "furniture-a4ef3",
  storageBucket: "furniture-a4ef3.firebasestorage.app",
  messagingSenderId: "214914250357",
  appId: "1:214914250357:web:513c6fd5035b95c5ac6a3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const GoogleProvider = new GoogleAuthProvider();
