// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJaEM08qWQUjJ3RkTx5lReKpjO1P5gggY",
    authDomain: "task-adding-app.firebaseapp.com",
    projectId: "task-adding-app",
    storageBucket: "task-adding-app.appspot.com",
    messagingSenderId: "620020734346",
    appId: "1:620020734346:web:638a42b0bdf28b5b839073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;