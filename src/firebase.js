
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCVbKRwY_6NbOURlKm6mVLydwkrmb_KudU",
  authDomain: "chat-9b20b.firebaseapp.com",
  projectId: "chat-9b20b",
  storageBucket: "chat-9b20b.appspot.com",
  messagingSenderId: "123834734945",
  appId: "1:123834734945:web:06cd329dd30a088e704d20",
  measurementId: "G-5H0T7LTEVB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db= getFirestore()
