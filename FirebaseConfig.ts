// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8v1YMycUnSvs5zr74ODBlrexmaQDSWAs",
  authDomain: "wombleit-20323.firebaseapp.com",
  projectId: "wombleit-20323",
  storageBucket: "wombleit-20323.appspot.com",
  messagingSenderId: "1071673681070",
  appId: "1:1071673681070:web:15ad6acc8c31a73dc8393f",
  measurementId: "G-0FB2E4J07Z"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);