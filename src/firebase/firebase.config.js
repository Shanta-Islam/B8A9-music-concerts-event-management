// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiJB7uq0u3fpFmHkQ6RRZJ2aSiniTE2KM",
  authDomain: "music-event-management.firebaseapp.com",
  projectId: "music-event-management",
  storageBucket: "music-event-management.appspot.com",
  messagingSenderId: "163842508660",
  appId: "1:163842508660:web:32e43738c683bd25598e21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;