import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDuK8Oh3_rUVSQYM9fcOqmQibzONwk6HLE",
    authDomain: "revents-e0a04.firebaseapp.com",
    projectId: "revents-e0a04",
    storageBucket: "revents-e0a04.appspot.com",
    messagingSenderId: "846828192215",
    appId: "1:846828192215:web:3b4ad66a41438b9ffb0b92"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;