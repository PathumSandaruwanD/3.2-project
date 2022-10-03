// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV6dOQczooAJlJWAuhblxezevLA5wAmYo",
  authDomain: "liquor-purchase-app.firebaseapp.com",
  projectId: "liquor-purchase-app",
  storageBucket: "liquor-purchase-app.appspot.com",
  messagingSenderId: "1052126029685",
  appId: "1:1052126029685:web:db8dd2182782285e13d53c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

