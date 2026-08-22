// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApPjrvUKCNuusAhTMkRpVHi4BaSLXHbRg",
  authDomain: "dukeforest-96e53.firebaseapp.com",
  projectId: "dukeforest-96e53",
  storageBucket: "dukeforest-96e53.firebasestorage.app",
  messagingSenderId: "807394176812",
  appId: "1:807394176812:web:e48233f5bc063433efc689",
  measurementId: "G-Q4V8NRCXBT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
const auth = firebase.auth();
