// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_SY_FAY1efYwEp6Fb7GYqJK4_ub0SMGc",
  authDomain: "todo-list-api-1.firebaseapp.com",
  projectId: "todo-list-api-1",
  storageBucket: "todo-list-api-1.appspot.com",
  messagingSenderId: "27501235018",
  appId: "1:27501235018:web:b41093ca10b398b0884fb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }