import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsFGcXWiGdZbS86oOB20fRBa83kwqjl2Q",
  authDomain: "parisolymp-chat.firebaseapp.com",
  projectId: "parisolymp-chat",
  storageBucket: "parisolymp-chat.appspot.com",
  messagingSenderId: "534180440999",
  appId: "1:534180440999:web:7849e816504e2eaa496482",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider };
