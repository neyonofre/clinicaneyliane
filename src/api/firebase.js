import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn0ElKEW7ZDIlTbYdgZ0KUgLaaJWE1bdM",
  authDomain: "clinicaneyliane.firebaseapp.com",
  projectId: "clinicaneyliane",
  storageBucket: "clinicaneyliane.firebasestorage.app",
  messagingSenderId: "23363035629",
  appId: "1:23363035629:web:9df330af888089c8ab07e4",
  measurementId: "G-N82TCFD589"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
