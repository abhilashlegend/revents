import * as actions from '../actions/actionTypes';

const initialState = {
    modal: '',
    show: false
};

const modalReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case actions.MODAL_OPEN:
            return {
                ...state,
                modal: action.payload,
                show: true
            }
        case actions.MODAL_CLOSE:
            return {
                ...state,
                show: false,
                modal: ''
            }
        default:
            return state;
    }
}

export default modalReducer;