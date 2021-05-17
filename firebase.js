import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3ErjhRuu-LhiO6Es2gDr9l6cRnNZvQjg",
  authDomain: "facebook-2-86d77.firebaseapp.com",
  projectId: "facebook-2-86d77",
  storageBucket: "facebook-2-86d77.appspot.com",
  messagingSenderId: "2463344393",
  appId: "1:2463344393:web:19a6e1929d939953a8d5d8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
