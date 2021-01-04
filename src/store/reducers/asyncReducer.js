import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: null
}

const asyncReducer = (state = initialState, {type, payload}) => {
    switch(type)
    {
        case actionTypes.ASYNC_ACTION_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.ASYNC_ACTION_FINISH:
            return {
                ...state,
                loading: false
            }
        case actionTypes.ASYNC_ACTION_ERROR:
            if(payload === undefined)
                payload = {message: "Something went wrong"}
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default asyncReducer;