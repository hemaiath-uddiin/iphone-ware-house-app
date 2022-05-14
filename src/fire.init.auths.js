// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0U51xTd8n03B7lV3FASuWpWeNb6yBaJA",
  authDomain: "iphone-warehouse-auth.firebaseapp.com",
  projectId: "iphone-warehouse-auth",
  storageBucket: "iphone-warehouse-auth.appspot.com",
  messagingSenderId: "358969268281",
  appId: "1:358969268281:web:30478d0ccedb717109d5e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app) ;
export default auth
