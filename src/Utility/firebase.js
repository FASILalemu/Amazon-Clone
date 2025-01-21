
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  authDomain: "clone-1f29c.firebaseapp.com",
  projectId: "clone-1f29c",
  storageBucket: "clone-1f29c.appspot.com",
  messagingSenderId: "506197849407",
  appId: "1:506197849407:web:6ff3fa4e01227d8e930f8a",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
