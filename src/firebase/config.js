import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJz6UACTLMINHYTPGYjw3j-3SagEWjtdY",
  authDomain: "ecommerce-hectorfajardo.firebaseapp.com",
  projectId: "ecommerce-hectorfajardo",
  storageBucket: "ecommerce-hectorfajardo.appspot.com",
  messagingSenderId: "116736060659",
  appId: "1:116736060659:web:a52ce7941072eea3d8db86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}