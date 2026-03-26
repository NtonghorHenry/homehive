// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "homehive-32183.firebaseapp.com",
  projectId: "homehive-32183",
  storageBucket: "homehive-32183.firebasestorage.app",
  messagingSenderId: "211131241117",
  appId: "1:211131241117:web:9377b299e66fe58312ba74"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp(); 
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};