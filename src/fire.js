

import firebase from "firebase";


var firebaseConfig = {
apiKey: "AIzaSyAk5SjSw42ysOmt6KWT7re42w5XiQAchtM",
authDomain: "reacttask-8a132.firebaseapp.com",
projectId: "reacttask-8a132",
storageBucket: "reacttask-8a132.appspot.com",
messagingSenderId: "393357203768",
appId: "1:393357203768:web:906ab28f8603b6c9f509cd",
measurementId: "G-7E63KZJE9C"
};

const fire = firebase.initializeApp(firebaseConfig);
  
export default fire;