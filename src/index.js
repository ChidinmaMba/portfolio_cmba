import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzlPhDcjOtBseG1hSYxRmhijkee_QrNR0",
  authDomain: "cmba-portfolio-blog.firebaseapp.com",
  projectId: "cmba-portfolio-blog",
  storageBucket: "cmba-portfolio-blog.appspot.com",
  messagingSenderId: "759510103887",
  appId: "1:759510103887:web:542fb023778303c0c4773a",
  measurementId: "G-P8PCK2CTC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


