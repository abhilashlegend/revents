import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuthenticated: true,
    currentUser: {
        email: 'test@test.com',
        photoURL: '/assets/images/user.png'
    }
}

const authReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case actionTypes.SIGN_IN_USER:
            const photo = payload.photoURL ? payload.photoURL : '/assets/images/user.png';
            return {
                ...state,
                isAuthenticated: true,
                currentUser: {
                    email: payload.email,
                    photoURL: photo,
                    uid: payload.uid,
                    displayName: payload.displayName,
                    providerId: payload.providerData[0].providerId
                },
            };
        case actionTypes.SIGN_OUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: null
            }
        default: 
            return state;
    }
}

export default authReducer;