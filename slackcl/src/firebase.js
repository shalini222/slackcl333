import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFjDRD4AmZJeFWqan3uMnPNWs4GvRzjkk",
  authDomain: "slacky333.firebaseapp.com",
  projectId: "slacky333",
  storageBucket: "slacky333.appspot.com",
  messagingSenderId: "123071326624",
  appId: "1:123071326624:web:c80c12012843bf665adcc5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
