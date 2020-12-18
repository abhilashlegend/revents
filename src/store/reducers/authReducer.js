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
            return {
                ...state,
                isAuthenticated: true,
                currentUser: {
                    email: payload.email,
                    photoURL: '/assets/images/user.png'
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