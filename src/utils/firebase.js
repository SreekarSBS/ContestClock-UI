// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNDsqYa19R7cLAnU7VUw5ol6uQ6CUobmk",
  authDomain: "contesthub-8e38c.firebaseapp.com",
  projectId: "contesthub-8e38c",
  storageBucket: "contesthub-8e38c.firebasestorage.app",
  messagingSenderId: "146142469926",
  appId: "1:146142469926:web:a1d9820c335c5c4fe76be7",
  measurementId: "G-QZH2KBCZL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);