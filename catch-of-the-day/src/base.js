import Rebase from 're-base';
import firebase from 'firebase';
import firebaseConfig from './config/firebase-config';

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default base
export default base;
