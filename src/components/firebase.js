import firebase from "firebase/app";
import "firebase/storage";
const config = {
  apiKey: "AIzaSyAa6tYWiKsBjuf1F8xpi6T_zC37Rl6qKhU",
  authDomain: "near-hostels.firebaseapp.com",
  projectId: "near-hostels",
  storageBucket: "near-hostels.appspot.com",
  messagingSenderId: "869267265437",
  appId: "1:869267265437:web:d9d92e85652848249c8174"
};

firebase.initializeApp(config);

const storage = firebase.storage();

export { firebase, storage as default };
