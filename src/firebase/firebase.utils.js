import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBMhshK5kZqDhqG-6AHoRldYAFPMq6y1I4",
    authDomain: "crwn-db-227.firebaseapp.com",
    databaseURL: "https://crwn-db-227.firebaseio.com",
    projectId: "crwn-db-227",
    storageBucket: "crwn-db-227.appspot.com",
    messagingSenderId: "804242081310",
    appId: "1:804242081310:web:a5dfe420e2d163c2e0500f",
    measurementId: "G-XBD5B6K591"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;