// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF9JBktW-yV6cR02cvCXJashezXzMvnlA",
  authDomain: "tenassaimant.firebaseapp.com",
  projectId: "tenassaimant",
  storageBucket: "tenassaimant.appspot.com",
  messagingSenderId: "83814956157",
  appId: "1:83814956157:web:ba38b342b0c0999b8ec514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth =getAuth(app)
export default Auth;