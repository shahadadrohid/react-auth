// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaZ1EfeehN0_-odyTjQwg6QIbzx9fnFDc",
    authDomain: "react-auth-78e38.firebaseapp.com",
    projectId: "react-auth-78e38",
    storageBucket: "react-auth-78e38.appspot.com",
    messagingSenderId: "325780449437",
    appId: "1:325780449437:web:8df6a88ae1b144ab4f0c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;