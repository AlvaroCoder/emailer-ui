// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQCkC1Ah89yz3rU52FSDyaEOvFlfMUKLM",
  authDomain: "emailer-dashboard.firebaseapp.com",
  projectId: "emailer-dashboard",
  storageBucket: "emailer-dashboard.appspot.com",
  messagingSenderId: "102751371526",
  appId: "1:102751371526:web:0d0dcd44510e930c5ade87",
  measurementId: "G-SM75K94DS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);