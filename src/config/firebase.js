// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3CrrrKfPpU-AxiyRmsRZ-B6bKgP7Nnfs",
  authDomain: "moshal-social.firebaseapp.com",
  projectId: "moshal-social",
  storageBucket: "moshal-social.appspot.com",
  messagingSenderId: "285610037925",
  appId: "1:285610037925:web:29280af360dae67cd6b34c",
  databaseURL:
    "https://moshal-social-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


export default db