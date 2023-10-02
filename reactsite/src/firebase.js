// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0WzA_HBs9db7-f_Vktl0XqiUWXta6hks",
  authDomain: "personal-website-dbe63.firebaseapp.com",
  databaseURL: "https://personal-website-dbe63-default-rtdb.firebaseio.com",
  projectId: "personal-website-dbe63",
  storageBucket: "personal-website-dbe63.appspot.com",
  messagingSenderId: "862428636312",
  appId: "1:862428636312:web:1ce570309dbdb60073dced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);