// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCluj8QjJmknkrrdTuyMbmqXTZLM9gkA8",
  authDomain: "react-auth-d1232.firebaseapp.com",
  projectId: "react-auth-d1232",
  storageBucket: "react-auth-d1232.appspot.com",
  messagingSenderId: "664113177276",
  appId: "1:664113177276:web:dab3cf2123008ed151e6b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);