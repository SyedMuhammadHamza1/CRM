import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyC1h99iH_fL8SfqGhJIZNEI-7mDm4GmIIU",
    authDomain: "crimialrecordmanagement.firebaseapp.com",
    databaseURL: "https://crimialrecordmanagement.firebaseio.com",
    projectId: "crimialrecordmanagement",
    storageBucket: "crimialrecordmanagement.appspot.com",
    messagingSenderId: "732674325925",
    appId: "1:732674325925:web:95bc5b075b0b5801"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;