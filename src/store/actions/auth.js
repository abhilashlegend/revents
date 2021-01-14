import * as actionTypes from './actionTypes';
import firebase from '../../config/firebase';
import { dataFromSnapShot, getUserProfile } from '../../firestore/fireStoreService';
import { currentUserProfile } from './profile';

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
                const profileRef = getUserProfile(user.uid);
                profileRef.onSnapshot(snapshot => {
                    dispatch(currentUserProfile(dataFromSnapShot(snapshot)));
                    dispatch({type: actionTypes.ASYNC_APP_LOADED});
                });
            } else {
                dispatch(signOutUser());
                dispatch({type: actionTypes.ASYNC_APP_LOADED});
            }
        })
    }
}

export const signOutUser = () => {
    return {
        type: actionTypes.SIGN_OUT_USER
    }
}