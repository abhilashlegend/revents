import { toast } from 'react-toastify';
import { delay } from '../../utility/utility';
import * as actionTypes from './actionTypes';
import { errorAction, finishAction, startAction } from './async';
import { sampleData } from '../../sampleData';


export const createEvent = event => {
    return {
        type: actionTypes.CREATE_EVENT,
        payload: event
    }
}

export const updateEvent = event => {
    return {
        type: actionTypes.UPDATE_EVENT,
        payload: event
    }
}

export const deleteEvent = eventId => {
    return {
        type: actionTypes.DELETE_EVENT,
        payload: eventId
    }
}

export const fetchEvents = () => {
    return async (dispatch) => {
        dispatch(startAction());
        try {
            const events = await delay(3000).then((resolve) => {
                return Promise.resolve(sampleData);
            });
            dispatch({type: actionTypes.FETCH_EVENTS, payload: events})
            dispatch(finishAction());
        }
        catch(error) {
            dispatch(errorAction(error));
            toast.error(error);
        }
    }
}


export const listenToEvents = events => {
    return {
        type: actionTypes.FETCH_EVENTS,
        payload: events
    }
}