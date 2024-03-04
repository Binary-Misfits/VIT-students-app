const admin = require('firebase-admin');

const firebaseConfig = {
  apiKey: "AIzaSyDiMG-OVxLjUbBSVM-0KiLarbEiex9qq7M",
  authDomain: "vit-hackathon-beafa.firebaseapp.com",
  projectId: "vit-hackathon-beafa",
  storageBucket: "vit-hackathon-beafa.appspot.com",
  messagingSenderId: "33958979958",
  appId: "1:33958979958:web:0a475188b859def063f257",
  measurementId: "G-BE7E4G356R",
};

// Initialize Firebase app
const app = admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`
});

// Firestore database
const db = admin.firestore();

// Firebase Auth
const auth = admin.auth();

module.exports = { app, db, auth };
