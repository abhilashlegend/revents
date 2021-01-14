import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentProfile: null,
    selectedProfile: null
}

const profileReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case actionTypes.CURRENT_USER_PROFILE:
            return {
                ...state,
                currentProfile: payload
            }
        case actionTypes.SELECTED_USER_PROFILE:
            return {
                ...state,
                selectedProfile: payload
            }
        default:
            return state;
    }
}

export default profileReducer;