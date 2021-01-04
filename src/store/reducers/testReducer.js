import { finishAction, startAction, errorAction } from "../actions/async";
import { delay } from '../../utility/utility';
import { toast } from "react-toastify";

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = amount => {
    return async dispatch => {
        dispatch(startAction());
        try {
            await delay(2000);
            dispatch({type: INCREMENT_COUNTER, payload: amount});
            dispatch(finishAction());
        } catch(error){
            dispatch(errorAction(error));
        }
    }
}

export const decrement = amount => {
    return async dispatch => {
        dispatch(startAction());
        try{
            await delay(2000);
            dispatch({type: DECREMENT_COUNTER, payload: amount});
            dispatch(finishAction());
        } catch(error) {
            dispatch(errorAction(error));
            toast.error(error);
        }
    }
}

const initialState = {
    data: 42
}

const testReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return {
                ...state,
                data: state.data + action.payload
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                data: state.data - action.payload
            }
        default:
            return state;
    }
}

export default testReducer;