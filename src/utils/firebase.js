// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoTlwoJ4e5u498B5DqUelmbxOeSXvzuBU",
  authDomain: "netflixgpt-e42cb.firebaseapp.com",
  projectId: "netflixgpt-e42cb",
  storageBucket: "netflixgpt-e42cb.appspot.com",
  messagingSenderId: "172972727478",
  appId: "1:172972727478:web:b32b63e9672b2bba6dda17",
  measurementId: "G-SFP7GE4B4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
