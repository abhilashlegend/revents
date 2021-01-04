import * as actionTypes from './actionTypes';

export const startAction = () => {
    return {
        type: actionTypes.ASYNC_ACTION_START
    }
}

export const finishAction = () => {
    return {
        type: actionTypes.ASYNC_ACTION_FINISH
    }
}

export const errorAction = error => {
    return {
        type: actionTypes.ASYNC_ACTION_ERROR,
        payload: error
    }
}