import * as actions from './actionTypes';

export const openModal = payload => {
    return {
        type: actions.MODAL_OPEN,
        payload: payload
    }
}

export const closeModal = () => {
    return {
        type: actions.MODAL_CLOSE
    }
}