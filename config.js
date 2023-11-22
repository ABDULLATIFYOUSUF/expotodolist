import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhEl7IqhaY0uXxTJU2Xn2DigWUHikLPcs",
    authDomain: "todolistexpo.firebaseapp.com",
    projectId: "todolistexpo",
    storageBucket: "todolistexpo.appspot.com",
    messagingSenderId: "310269936056",
    appId: "1:310269936056:web:03a1bc84d7be35382d0f4d",
    measurementId: "G-0W9EQLPX5C"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};