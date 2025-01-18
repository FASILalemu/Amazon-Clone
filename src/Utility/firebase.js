// // Import the functions you need from the SDKs you need
// import firebase from "firebase/compact/app";
// import getAuth from 'firebase/auth'
// import 'firebase/compat/firebase'
// import 'firebase/compat/auth'
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC65uMAUn_9zT5yVPot5qLyli-AOSmiMGI",
//   authDomain: "clone-1f29c.firebaseapp.com",
//   projectId: "clone-1f29c",
//   storageBucket: "clone-1f29c.firebasestorage.app",
//   messagingSenderId: "506197849407",
//   appId: "1:506197849407:web:6ff3fa4e01227d8e930f8a"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = app.firestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC65uMAUn_9zT5yVPot5qLyli-AOSmiMGI",
  authDomain: "clone-1f29c.firebaseapp.com",
  projectId: "clone-1f29c",
  storageBucket: "clone-1f29c.appspot.com", // Corrected storage bucket domain
  messagingSenderId: "506197849407",
  appId: "1:506197849407:web:6ff3fa4e01227d8e930f8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

