import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCWADpVisTiCrsXvMoa-_t3AUzutPttgoU',
    authDomain: 'clone-4c3e1.firebaseapp.com',
    databaseURL: 'https://clone-4c3e1.firebaseio.com',
    projectId: 'clone-4c3e1',
    storageBucket: 'clone-4c3e1.appspot.com',
    messagingSenderId: '211434238904',
    appId: '1:211434238904:web:f280b980ad68daa3be954d',
    measurementId: 'G-J9QXQXR5YZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
