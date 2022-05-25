import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBc1ZUckuz3-AKYLr0OGHUGZunJ1xGXEFA",
    authDomain: "twitter-1e177.firebaseapp.com",
    projectId: "twitter-1e177",
    storageBucket: "twitter-1e177.appspot.com",
    messagingSenderId: "91123754643",
    appId: "1:91123754643:web:03143d91b7e402b2674f66",
    measurementId: "G-EFK8CX5FDX"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);