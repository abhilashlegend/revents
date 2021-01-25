import * as actionTypes from './actionTypes';

export const currentUserProfile = profile => {
    return {
        type: actionTypes.CURRENT_USER_PROFILE,
        payload: profile
    }
}

export const selectedUserProfile = profile => {
    return {
        type: actionTypes.SELECTED_USER_PROFILE,
        payload: profile
    }
}

export const currentUserPhotos = photos => {
    return {
        type: actionTypes.CURRENT_USER_PHOTOS,
        payload: photos
    }
}