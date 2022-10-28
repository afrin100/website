// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuj1f1VfJXtQD8pczYhrpXc_XdGmKTCho",
  authDomain: "ema-jon-simple-3454a.firebaseapp.com",
  projectId: "ema-jon-simple-3454a",
  storageBucket: "ema-jon-simple-3454a.appspot.com",
  messagingSenderId: "76273913024",
  appId: "1:76273913024:web:17a19c9b232a26c5007125"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;