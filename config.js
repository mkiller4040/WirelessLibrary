import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBF0-lv9CsVaoeXj245P_Q9AoK-n_cbWzc",
    authDomain: "wireless-library-3c1ac.firebaseapp.com",
    projectId: "wireless-library-3c1ac",
    storageBucket: "wireless-library-3c1ac.appspot.com",
    messagingSenderId: "933130552721",
    appId: "1:933130552721:web:a30b62dc3ab1195a564630"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();