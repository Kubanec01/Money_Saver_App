// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnoWR5VrC-ZTnDX4yuTmT9PtCFj7vMHO0",
  authDomain: "money-saver-app-f9d5e.firebaseapp.com",
  projectId: "money-saver-app-f9d5e",
  storageBucket: "money-saver-app-f9d5e.firebasestorage.app",
  messagingSenderId: "863400519457",
  appId: "1:863400519457:web:89a28e5e84c31afdaac060",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
