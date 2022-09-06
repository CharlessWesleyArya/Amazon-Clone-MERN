// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
//due to update of firebase we have imported the required things of firebase as follows
//but before we just import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBFhXDh8MZJNB5pWdzwrHFc3ll-22RvWAU",
  authDomain: "clone-d5a71.firebaseapp.com",
  projectId: "clone-d5a71",
  storageBucket: "clone-d5a71.appspot.com",
  messagingSenderId: "600844363496",
  appId: "1:600844363496:web:0fae087e995ef5343e8b5d",
  measurementId: "G-ZJ5WL50KVH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
