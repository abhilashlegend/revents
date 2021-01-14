import cuid from 'cuid';
import firebase from '../config/firebase';

const db = firebase.firestore();

export const dataFromSnapShot = snapshot => {
    if (!snapshot.exists) return undefined;

    const data = snapshot.data();

    for(let prop in data) {
        if(data.hasOwnProperty(prop)) {
            if(data[prop] instanceof firebase.firestore.Timestamp) {
                data[prop] = data[prop].toDate()
            }
        }
    }

    return {
        ...data,
        id: snapshot.id
    }
}

export const listenToEventsFromFireStore = () => {
    return db.collection('events').orderBy('date');
}

export const listenToEventFromFireStore = eventId => {
    return db.collection('events').doc(eventId);   
}

export const addEventToFirestore = event => {
    return db.collection('events').add({
        ...event,
        hostedBy: 'Abhilash',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: firebase.firestore.FieldValue.arrayUnion({
            id: cuid(),
            displayName: 'Abhilash',
            photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        })
    });
}

export const updateEventToFirestore = event => {
    return db.collection('events').doc(event.id).update(event);
}

export const deleteEventFromFirestore = eventId => {
    return db.collection('events').doc(eventId).delete();
}

export const cancelEventToggle = event => {
    return db.collection('events').doc(event.id).update({
        isCancelled: !event.isCancelled
    })
}

export const setUserProfileData = user => {
    return db.collection("users").doc(user.uid).set({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}

export const getUserProfile = userId => {
    return db.collection("users").doc(userId);
}

export const updateUserProfile = profile => {
    const user = firebase.auth().currentUser;

    try {
        if(user.displayName !== profile.displayName) {
            user.updateProfile({
                displayName: profile.displayName
            })
        }
        return db.collection('users').doc(user.uid).update(profile);
    } catch (error) {
        throw error;
    }
   
}