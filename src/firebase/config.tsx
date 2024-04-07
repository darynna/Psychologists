import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAqfKoJJV9AvIMFs9M8RKJ2GmY0A5P23io",
  authDomain: "psychologists-40775.firebaseapp.com",
  projectId: "psychologists-40775",
  storageBucket: "psychologists-40775.appspot.com",
  messagingSenderId: "761463462657",
  appId: "1:761463462657:web:6aef4cda8742544f5c9900",
    measurementId: "G-HZDPE1FH6B",
   databaseURL: "https://psychologists-40775-default-rtdb.europe-west1.firebasedatabase.app/"
};


const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = getAuth(app);