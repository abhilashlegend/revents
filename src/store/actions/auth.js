import * as actionTypes from './actionTypes';
import firebase from '../../config/firebase';

export const signInUser = user => {
    return {
        type: actionTypes.SIGN_IN_USER,
        payload: user
    }
}

export const verifyAuth = () => {
    return dispatch => {
        return firebase.auth().onAuthStateChanged(user => {
            if(user) {
                dispatch(signInUser(user));
                dispatch({type: actionTypes.ASYNC_APP_LOADED})
            } else {
                dispatch(signOutUser());
            }
        })
    }
}

export const signOutUser = () => {
    return {
        type: actionTypes.SIGN_OUT_USER
    }
}