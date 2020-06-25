import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBziYuVcEmxBK-4uVI8GLo7gEf7LUb_O0M",
    authDomain: "prime-c538f.firebaseapp.com",
    databaseURL: "https://prime-c538f.firebaseio.com",
    projectId: "prime-c538f",
    storageBucket: "prime-c538f.appspot.com",
    messagingSenderId: "355087571204",
    appId: "1:355087571204:web:0e0162a606f620fd185851"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;