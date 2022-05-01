// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2CNZ1GdGRcul8gx47k3MzwF_EmN4sUG0",
    authDomain: "car-dealer-96fb9.firebaseapp.com",
    projectId: "car-dealer-96fb9",
    storageBucket: "car-dealer-96fb9.appspot.com",
    messagingSenderId: "293750466931",
    appId: "1:293750466931:web:cc3125d48c2f5d42587d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;