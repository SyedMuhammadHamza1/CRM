import firebase from 'firebase'
import { func } from 'prop-types';
import history from '../../history';
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Redirect } from 'react-router';


 
 

export function getCriminalData(criminalData) {
    return dispatch => {
        console.log(criminalData , "actions.js")
        dispatch({ type: "CRIMINAL", payload: criminalData });

    }
}
 

