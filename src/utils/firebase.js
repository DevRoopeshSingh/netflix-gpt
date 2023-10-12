// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNLcHV7MNdc1OY_hrqRkmacUooH_Ff3Ng",
  authDomain: "mynetflixgpt-85cfe.firebaseapp.com",
  projectId: "mynetflixgpt-85cfe",
  storageBucket: "mynetflixgpt-85cfe.appspot.com",
  messagingSenderId: "551743786033",
  appId: "1:551743786033:web:7f17257e9e8ba3017e9910",
  measurementId: "G-86S9HTDY5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
