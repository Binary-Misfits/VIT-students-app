const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} = require("firebase-admin/firestore");
const { getAUth, createUserWithEmailAndPassword } = require("firebase/auth");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiMG-OVxLjUbBSVM-0KiLarbEiex9qq7M",
  authDomain: "vit-hackathon-beafa.firebaseapp.com",
  projectId: "vit-hackathon-beafa",
  storageBucket: "vit-hackathon-beafa.appspot.com",
  messagingSenderId: "33958979958",
  appId: "1:33958979958:web:0a475188b859def063f257",
  measurementId: "G-BE7E4G356R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

initializeApp();

const db = getFirestore();
const auth = getAuth(app);
module.exports(db);
