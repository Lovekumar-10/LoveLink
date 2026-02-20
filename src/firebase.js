// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCyJxL4p0K1wnsh6JZXt0OAXPGBE5e8x4s",
  authDomain: "metrimonialwebsite.firebaseapp.com",
  projectId: "metrimonialwebsite",
  storageBucket: "metrimonialwebsite.firebasestorage.app",
  messagingSenderId: "897279083973",
  appId: "1:897279083973:web:c3db462bede13eabfa37ac",
  measurementId: "G-7CGL1NTSDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app); // ✅ make sure you export `auth`
export const db = getFirestore(app);
export const storage = getStorage(app);
export const messaging = getMessaging(app);