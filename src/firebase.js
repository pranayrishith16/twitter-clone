import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// Required for side-effects
const firebaseConfig = {
  apiKey: "AIzaSyCf_nL_Bqga3jMQhKs_Zca4eLJkwpYMPMc",
  authDomain: "dfdsfa-46d00.firebaseapp.com",
  projectId: "dfdsfa-46d00",
  storageBucket: "dfdsfa-46d00.appspot.com",
  messagingSenderId: "757169423586",
  appId: "1:757169423586:web:5f845615cbbd985208cabb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;