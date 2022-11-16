import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANMBDSp2-IZXOw55d7RLwsPwMoXYELnpQ",
  authDomain: "react-gallery-6fc7c.firebaseapp.com",
  projectId: "react-gallery-6fc7c",
  storageBucket: "react-gallery-6fc7c.appspot.com",
  messagingSenderId: "279751161679",
  appId: "1:279751161679:web:7b9b80a93d2deace02f73a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {app,db,storage};