
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
// import ""

import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import firebase from 'firebase';

  {/* // Your web app's Firebase configuration */}
  // var firebaseConfig  = {
  //   apiKey: "AIzaSyC1h99iH_fL8SfqGhJIZNEI-7mDm4GmIIU",
  //   authDomain: "crimialrecordmanagement.firebaseapp.com",
  //   databaseURL: "https://crimialrecordmanagement.firebaseio.com",
  //   projectId: "crimialrecordmanagement",
  //   storageBucket: "crimialrecordmanagement.appspot.com",
  //   messagingSenderId: "732674325925",
  //   appId: "1:732674325925:web:95bc5b075b0b5801"
  // };
  // firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
