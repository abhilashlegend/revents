import * as actionTypes from './actionTypes';

export const signInUser = payload => {
    return {
        type: actionTypes.SIGN_IN_USER,
        payload: payload
    }
}

export const signOutUser = () => {
    return {
        type: actionTypes.SIGN_OUT_USER
    }
}