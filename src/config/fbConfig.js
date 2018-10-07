import firebase from "firebase/app";
import "firebase/firebase";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBYdp8-dlGmBAv2PujZRAE1aUbJJW1Dfu0",
  authDomain: "fiyabase-crud.firebaseapp.com",
  databaseURL: "https://fiyabase-crud.firebaseio.com",
  projectId: "fiyabase-crud",
  storageBucket: "",
  messagingSenderId: "524177324947"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
