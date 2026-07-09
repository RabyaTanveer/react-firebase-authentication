import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7sOJWd83MDOxvFK8W-5Av5hW3tuGJe8Y",
  authDomain: "login-signup-app-9c254.firebaseapp.com",
  projectId: "login-signup-app-9c254",
  storageBucket: "login-signup-app-9c254.firebasestorage.app",
  messagingSenderId: "910833136923",
  appId: "1:910833136923:web:c3835913b234d7fce50fbe",
  measurementId: "G-40MK4G1BJT"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };