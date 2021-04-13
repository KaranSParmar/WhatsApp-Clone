import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4HWBfZB1kTTlTkRy3qQoWbWZ_CkG0tus",
  authDomain: "whatsapp-clone-13.firebaseapp.com",
  projectId: "whatsapp-clone-13",
  storageBucket: "whatsapp-clone-13.appspot.com",
  messagingSenderId: "214251203199",
  appId: "1:214251203199:web:ebfbe3aa1f22c4f627ed4a",
  measurementId: "G-FR00LM21D4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;