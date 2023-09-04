import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "moshal-social.firebaseapp.com",
  databaseURL:
    "https://moshal-social-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moshal-social",
  storageBucket: "moshal-social.appspot.com",
  messagingSenderId: process.env.FIREBASE_MSG_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
