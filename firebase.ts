// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqkjTnR4squnDINZACLKfEuZsrk5ZN24E',
  authDomain: 'chatgpt-db803.firebaseapp.com',
  projectId: 'chatgpt-db803',
  storageBucket: 'chatgpt-db803.appspot.com',
  messagingSenderId: '1040603124029',
  appId: '1:1040603124029:web:736a6d9778fff9aada7554',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
