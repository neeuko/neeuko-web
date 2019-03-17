import firebase from "firebase";

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
