import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyDNuWZlY7m6OoTIWOsJfryXp0HGvZ0bo6Y",
    authDomain: "fir-web-chat-app-cfe32.firebaseapp.com",
    databaseURL: "https://fir-web-chat-app-cfe32.firebaseio.com",
    projectId: "fir-web-chat-app-cfe32",
    storageBucket: "fir-web-chat-app-cfe32.appspot.com",
    messagingSenderId: "726482516796",
    appId: "1:726482516796:web:8d4d8f3e7d47b449dd7c39",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
