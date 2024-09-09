
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS0kN6NbClMgSxS-20xUISyDWhRedsj_Q",
  authDomain: "tenassainmant.firebaseapp.com",
  projectId: "tenassainmant",
  storageBucket: "tenassainmant.appspot.com",
  messagingSenderId: "278784494317",
  appId: "1:278784494317:web:dda72a16fa426cb9a85ae4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth =getAuth(app)
export default Auth;