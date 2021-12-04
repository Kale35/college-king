import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRSBEzVB74rV_yHjzOm7yW3ql745L4vyc",
  authDomain: "college-king.firebaseapp.com",
  projectId: "college-king",
  storageBucket: "college-king.appspot.com",
  messagingSenderId: "288882903339",
  appId: "1:288882903339:web:8c7cd2e4ac8d1549eb1d6e",
  measurementId: "G-2J9RS5JNVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const signUp = createUserWithEmailAndPassword(auth);
const db = getFirestore();

export {db, auth, signUp};
