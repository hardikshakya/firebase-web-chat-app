import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "YOUR_DETAIL",
    authDomain: "YOUR_DETAIL",
    databaseURL: "YOUR_DETAIL",
    projectId: "YOUR_DETAIL",
    storageBucket: "YOUR_DETAIL",
    messagingSenderId: "YOUR_DETAIL",
    appId: "YOUR_DETAIL",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
