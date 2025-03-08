// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3pEM49vWCUqZxvE8W2KhDRc3niHfT7p8",
  authDomain: "psych-67c1c.firebaseapp.com",
  projectId: "psych-67c1c",
  storageBucket: "psych-67c1c.firebasestorage.app",
  messagingSenderId: "183648512326",
  appId: "1:183648512326:web:8e382ca479ea61342f9d47",
  measurementId: "G-9TRYDJJCDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Create the auth instance

export { auth }; // Export auth
