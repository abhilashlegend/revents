import { toast } from 'react-toastify';
import firebase from '../config/firebase';
import { setUserProfileData } from './fireStoreService';

export const signInWithEmail = creds => {
    return firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
}

export const signOutFirebase = () => {
    return firebase.auth().signOut();
}

export const registerWithFirebase = async (creds) => {
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password);
        await result.user.updateProfile({
            displayName: creds.displayName
        });
        return await setUserProfileData(result.user)
    } catch (error) {
        throw error;
    }
}

export const socialLogin = async selectedProvider => {
    let provider;

    if(selectedProvider === 'facebook') {
        provider = new firebase.auth.FacebookAuthProvider();
    }
    if(selectedProvider === 'google') {
        provider = new firebase.auth.GoogleAuthProvider();
    }
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        if(result.additionalUserInfo.isNewUser) {
            await setUserProfileData(result.user);
        }
    } catch (error) {
        toast.error(error.message);
    }
}

export const updatePassword = creds => {
    return firebase.auth().currentUser.updatePassword(creds.password1);
}