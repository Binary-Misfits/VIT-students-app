const admin = require('firebase-admin');
const serviceAcount = require('./vit-hackathon-beafa-firebase-adminsdk-z25j9-3c1faee340.json')

// Initialize Firebase app
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAcount),
  databaseURL: `https://${serviceAcount.projectId}.firebaseio.com`
});

// Firestore database
const db = admin.firestore();

// Firebase Auth
const auth = admin.auth();

module.exports = { app, db, auth };
