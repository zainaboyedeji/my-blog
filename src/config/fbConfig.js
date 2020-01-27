import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyCghyQBHomgbLAXtwChk7zKhup4G_li_mg",
    authDomain: "zainab-app.firebaseapp.com",
    databaseURL: "https://zainab-app.firebaseio.com",
    projectId: "zainab-app",
    storageBucket: "zainab-app.appspot.com",
    messagingSenderId: "143981410255",
    appId: "1:143981410255:web:8b64b890349f1f862084ba",
    measurementId: "G-1GC2LVZFZP"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();
  
export default firebase;