import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDi2u3PDGdnDVRtzxtz7MKODipeJlNM3-g",
  authDomain: "react-firebase-8926e.firebaseapp.com",
  projectId: "react-firebase-8926e",
  storageBucket: "react-firebase-8926e.appspot.com",
  messagingSenderId: "288612778793",
  appId: "1:288612778793:web:29b2462692bd4d974fed38"
};

export const app = initializeApp(firebaseConfig);
export const firestore =  getFirestore(app);