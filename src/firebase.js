// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "most-mcn.firebaseapp.com",
    projectId: "most-mcn",
    storageBucket: "most-mcn.appspot.com",
    messagingSenderId: "1092071570785",
    appId: "1:1092071570785:web:511f1cefff67338f109920",
    measurementId: "G-W2WW5MYSN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }