// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB49jxQ_uxO0mUpF2DId6jkTEmPDApH-2A",
    authDomain: "callsheet-cadd2.firebaseapp.com",
    projectId: "callsheet-cadd2",
    storageBucket: "callsheet-cadd2.appspot.com",
    messagingSenderId: "582630248120",
    appId: "1:582630248120:web:8f5eb30d0dc34efe06ee4d",
    measurementId: "G-K8WYP4DRZM"
  };
  
  // Initialize Firebase
  const fbapp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(fbapp);
  const auth = getAuth(fbapp);

  export {auth}