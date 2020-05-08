import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyB-1rMoGJesXwTwV9rJsll4I2MxEC_1X3Y",
    authDomain: "f4tube-e7be0.firebaseapp.com",
    databaseURL: "https://f4tube-e7be0.firebaseio.com",
    projectId: "f4tube-e7be0",
    storageBucket: "f4tube-e7be0.appspot.com",
    messagingSenderId: "322716227563",
    appId: "1:322716227563:web:78f4d4930e3fe7ba5e6bae"
};

firebase.initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
