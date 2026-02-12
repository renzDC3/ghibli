import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 1. Added this

const firebaseConfig = {
  apiKey: "AIzaSyCeV8paVRZ9x9zQp3PGLHS--X-yhLHMwDg",
  authDomain: "ghibli-1774a.firebaseapp.com",
  projectId: "ghibli-1774a",
  storageBucket: "ghibli-1774a.firebasestorage.app",
  messagingSenderId: "949843123702",
  appId: "1:949843123702:web:bfc07b47987e7c85833bd7",
  measurementId: "G-2JHZQM18ZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Initialize and Export the database
export const db = getFirestore(app);