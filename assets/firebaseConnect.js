import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCyF6_UrNn_3yQDVD0KUCQ1AACyzho4KSE",
    authDomain: "appsofistiquee.firebaseapp.com",
    projectId: "appsofistiquee",
    storageBucket: "appsofistiquee.appspot.com",
    messagingSenderId: "96408737740",
    appId: "1:96408737740:web:f3b455b494044b6c016f69",
    measurementId: "G-CRB8MQQN7F"
  };

  if (!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    }
  export default firebase;