import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// Configure Firebase.
const configFirebase = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://ex-store-1b146-default-rtdb.firebaseio.com",
  projectId: "ex-store-1b146",
  storageBucket: "ex-store-1b146.appspot.com",
  messagingSenderId: "993640765695",
  appId: "1:993640765695:web:4b45dabf05cc3f52aa94ca",
  measurementId: "G-CP60L5LBE8",
};
const app = firebase.initializeApp(configFirebase);
export const database = getDatabase(app);
export const auth = getAuth(app);
