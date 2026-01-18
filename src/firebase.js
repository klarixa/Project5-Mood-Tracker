import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANKWfTZfSqKBsF_c9YsJX3azDIZcUdq2g",
  authDomain: "mood-tracker-22klarixa.firebaseapp.com",
  projectId: "mood-tracker-22klarixa",
  storageBucket: "mood-tracker-22klarixa.firebasestorage.app",
  messagingSenderId: "284621460072",
  appId: "1:284621460072:web:59f9fb6ffa2396fb5161dd"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);