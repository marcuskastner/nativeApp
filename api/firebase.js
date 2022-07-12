// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjygeTdhtqbJk33yBDf8w5OkgGbTSpzAM',
  authDomain: 'fir-auth-8757f.firebaseapp.com',
  databaseURL: 'https://fir-auth-8757f-default-rtdb.firebaseio.com',
  projectId: 'fir-auth-8757f',
  storageBucket: 'fir-auth-8757f.appspot.com',
  messagingSenderId: '18473169843',
  appId: '1:18473169843:web:3d3b21ff792b26a20891c6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
