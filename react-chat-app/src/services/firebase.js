import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "YOUR_DATA",
    authDomain: "YOUR_DATA",
    databaseURL: "YOUR_DATA",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
