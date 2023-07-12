import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD_L0YcAXOOAgo0rAp878PAQBedTiOEeY4",
    authDomain: "crwn-db-5610b.firebaseapp.com",
    projectId: "crwn-db-5610b",
    storageBucket: "crwn-db-5610b.appspot.com",
    messagingSenderId: "64468178824",
    appId: "1:64468178824:web:57c88a1f6c788a57644c3d",
    measurementId: "G-09F49K0FF4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;