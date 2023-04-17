// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyALbeMWarrBNiT1Pg5jWISG8MQlI6fBfg8",

    authDomain: "cv-genie.firebaseapp.com",

    projectId: "cv-genie",

    storageBucket: "cv-genie.appspot.com",

    messagingSenderId: "770718263065",

    appId: "1:770718263065:web:f62d143a1be6b0f25c8788",

    measurementId: "G-6HYHE5PS9W"

};


// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
