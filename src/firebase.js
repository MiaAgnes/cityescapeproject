// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Erstat nedenstående med din egen konfiguration fra Firebase Console
// (Project Settings -> General -> Your apps -> SDK setup and configuration)
const firebaseConfig = {
  apiKey: "AIzaSyDngrMsurkGtClq1wAlSdVjCGXXrzpw04s",
  authDomain: "cityescape-dbc2d.firebaseapp.com",
  projectId: "cityescape-dbc2d",
  storageBucket: "cityescape-dbc2d.firebasestorage.app",
  messagingSenderId: "624299190142",
  appId: "1:624299190142:web:3e1067a4e8828da7bb352f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (databasen)
export const db = getFirestore(app);

export default app;
