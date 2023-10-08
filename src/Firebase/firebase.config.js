// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcfC-1GxnI4DTWegwiSTQjhqK19V31LN0",
  authDomain: "educational-it.firebaseapp.com",
  projectId: "educational-it",
  storageBucket: "educational-it.appspot.com",
  messagingSenderId: "170799909426",
  appId: "1:170799909426:web:279aa8e333ab38c8244a2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
