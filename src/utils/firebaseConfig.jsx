// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJz6UACTLMINHYTPGYjw3j-3SagEWjtdY",
  authDomain: "ecommerce-hectorfajardo.firebaseapp.com",
  projectId: "ecommerce-hectorfajardo",
  storageBucket: "ecommerce-hectorfajardo.appspot.com",
  messagingSenderId: "116736060659",
  appId: "1:116736060659:web:dbcc9c1932196e6ed8db86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);