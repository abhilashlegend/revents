import * as actionTypes from '../actions/actionTypes';

const initialState = {
    events: []
}

const eventReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case actionTypes.CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        case actionTypes.UPDATE_EVENT:
            return {
                ...state,
                events: [
                    ...state.events.filter((evt) => evt.id !== action.payload.id),
                    action.payload
                ]
            }
        case actionTypes.DELETE_EVENT:
            return {
                ...state,
                events: [
                    ...state.events.filter(ent => ent.id !== action.payload)
                ]
            }
        default:
            return state;
    }
}

export default eventReducer;