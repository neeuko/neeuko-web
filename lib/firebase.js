import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDMulR-E7u093ckSHX3P-bGuBYGrKPA57A",
  authDomain: "neeuko-webapp.firebaseapp.com",
  databaseURL: "https://neeuko-webapp.firebaseio.com",
  storageBucket: "neeuko-webapp.appspot.com"
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
