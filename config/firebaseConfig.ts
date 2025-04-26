// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCms8VR_CNUmGo5F4Q0Q_QxhY1coWmluCI",
  authDomain: "lifefile-faf7e.firebaseapp.com",
  projectId: "lifefile-faf7e",
  storageBucket: "lifefile-faf7e.firebasestorage.app", // Updated storage bucket URL
  messagingSenderId: "122051395456",
  appId: "1:122051395456:web:6bf0ca34eca7dac6b94b65",
  measurementId: "G-JCTWF10FBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth: Auth = getAuth(app);         // Firebase Auth with type
export const db: Firestore = getFirestore(app); // Firestore with type
export const analytics: Analytics = getAnalytics(app); // Analytics with type
