// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "dmap-a8cc0.firebaseapp.com",
    projectId: "dmap-a8cc0",
    storageBucket: "dmap-a8cc0.firebasestorage.app",
    messagingSenderId: "78589855261",
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const auth = firebase.auth();
