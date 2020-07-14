import React , {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signinAction,signoutAction, errorMessage } from '../../store/actions/actions';
// import history from '../../history';
import firebase from 'firebase';
import history from '../../history';
class Logout extends Component {
constructor(props) {
   super(props);
   this.signOut = this.signOut.bind(this);
}
 signOut(){
       firebase.auth().signOut().then(function () {
           // dispatch({ type: "SHOW_PROGRESS_BAR", payload: false })
           // dispatch({ type: "IS_LOGIN", payload: false })
           // Sign-out successful.
           // history.push('/signin');
           console.log("sign out successfully")
           this.props.history.push('/auth/login');
       }, function (error) { 
           // An error happened.
       });
   }
}
export default Logout