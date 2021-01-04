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