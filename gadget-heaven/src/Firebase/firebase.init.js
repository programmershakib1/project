// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR_ZOH0QUfCTHC9DRWORPLBRMV70XKUlM",
  authDomain: "programmer-shakib.firebaseapp.com",
  projectId: "programmer-shakib",
  storageBucket: "programmer-shakib.firebasestorage.app",
  messagingSenderId: "752066538827",
  appId: "1:752066538827:web:23be5a8a9e18d46eed8cce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;