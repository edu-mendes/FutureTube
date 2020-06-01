import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router' ;
import { generateReducers } from './reducers/index';
import { createBrowserHistory } from "history";

const firebaseConfig = {
    apiKey: "AIzaSyB-1rMoGJesXwTwV9rJsll4I2MxEC_1X3Y",
    authDomain: "f4tube-e7be0.firebaseapp.com",
    databaseURL: "https://f4tube-e7be0.firebaseio.com",
    projectId: "f4tube-e7be0",
    storageBucket: "f4tube-e7be0.appspot.com",
    messagingSenderId: "322716227563",
    appId: "1:322716227563:web:6cea535f736ba2865e6bae"
};

firebase.initializeApp(firebaseConfig);

const history = createBrowserHistory();

const store = createStore(
    generateReducers(history),
    applyMiddleware(routerMiddleware(history)),
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
serviceWorker.unregister();
