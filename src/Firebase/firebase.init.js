// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8DRASMzpWq3Zo4jtY5AAUGa59brnqpiE",
  authDomain: "freelance-task-marketpla-eda4e.firebaseapp.com",
  projectId: "freelance-task-marketpla-eda4e",
  storageBucket: "freelance-task-marketpla-eda4e.firebasestorage.app",
  messagingSenderId: "805017646132",
  appId: "1:805017646132:web:a05e319ccd3a5cb2fb8661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)