import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { w as writable } from "./index.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyALbeMWarrBNiT1Pg5jWISG8MQlI6fBfg8",
  authDomain: "cv-genie.firebaseapp.com",
  projectId: "cv-genie",
  storageBucket: "cv-genie.appspot.com",
  messagingSenderId: "770718263065",
  appId: "1:770718263065:web:f62d143a1be6b0f25c8788",
  measurementId: "G-6HYHE5PS9W"
};
const app = initializeApp(firebaseConfig);
getAuth(app);
getFirestore(app);
const user = writable();
const isLoading = writable(true);
new GoogleAuthProvider();
export {
  isLoading as i,
  user as u
};
