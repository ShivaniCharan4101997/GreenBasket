import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdphSny9GzHyQb554IhWFoIO1XsA9zKHo",
  authDomain: "greenbasket-53a72.firebaseapp.com",
  projectId: "greenbasket-53a72",
  storageBucket: "greenbasket-53a72.firebasestorage.app",
  messagingSenderId: "188400087156",
  appId: "1:188400087156:web:bff31f1c519257957b2121",
  measurementId: "G-PZFQMC5N1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const messagesCollection = collection(db, "messages");
