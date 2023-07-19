import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyANYjqugAMnvEDZtV8cuNQD7c6akOM59qY",
  authDomain: "ciclista-eletronico-49ee8.firebaseapp.com",
  projectId: "ciclista-eletronico-49ee8",
  storageBucket: "ciclista-eletronico-49ee8.appspot.com",
  messagingSenderId: "504913859936",
  appId: "1:504913859936:web:e08e6196912500ffc93a05"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
