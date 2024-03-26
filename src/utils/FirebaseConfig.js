import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAifYWJF9p-0OJUOv5m-MHjeaFhh5dq8Ag",
  authDomain: "olx-clone-8b5c5.firebaseapp.com",
  projectId: "olx-clone-8b5c5",
  storageBucket: "olx-clone-8b5c5.appspot.com",
  messagingSenderId: "452270942052",
  appId: "1:452270942052:web:18b82ba65f193e78a3fc71",
  measurementId: "G-6ZPTTQZ9P3",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

