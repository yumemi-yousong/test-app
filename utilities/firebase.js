import firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBPkt8JuGrnl9pGmg7HFVxfyHKa0I_NjRU",
    authDomain: "test-app-a29a4.firebaseapp.com",
    databaseURL: "https://test-app-a29a4.firebaseio.com",
    projectId: "test-app-a29a4",
    storageBucket: "test-app-a29a4.appspot.com",
    messagingSenderId: "978207693713"
  };
  firebase.initializeApp(config);

  export default firebase; //show configured firebase to public