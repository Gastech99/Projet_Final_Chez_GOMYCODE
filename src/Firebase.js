// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Ici Nous accedons a FireBase
const firebaseConfig = {
  apiKey: "AIzaSyCrHtJSmnbD4RQ6E6spjIJazlKaiSLdKmE",
  authDomain: "gassama-fashion.firebaseapp.com",
  projectId: "gassama-fashion",
  storageBucket: "gassama-fashion.appspot.com",
  messagingSenderId: "1053907351082",
  appId: "1:1053907351082:web:4eed8187fed2948db1b553",
  measurementId: "G-ZC58PTJD07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB