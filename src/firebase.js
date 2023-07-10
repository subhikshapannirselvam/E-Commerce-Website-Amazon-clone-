// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyChBNg-6exil91dkYZ58VCBuqBFqI3bpKE",
  authDomain: "clone-186fc.firebaseapp.com",
  projectId: "clone-186fc",
  storageBucket: "clone-186fc.appspot.com",
  messagingSenderId: "716520138994",
  appId: "1:716520138994:web:dfa8fb85b31cc83f62086b",
  measurementId: "G-G4PD22Z9H9"
};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);