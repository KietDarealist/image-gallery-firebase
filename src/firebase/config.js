import "firebase//storage";
import "firebase/firestore";
import * as firebase from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFxT1ZmbtWIIhunItbRgG673LDH4TeQuw",
  authDomain: "ninja-firegram-8396c.firebaseapp.com",
  projectId: "ninja-firegram-8396c",
  storageBucket: "ninja-firegram-8396c.appspot.com",
  messagingSenderId: "791942965454",
  appId: "1:791942965454:web:5035ab8546212fd2b9889f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
