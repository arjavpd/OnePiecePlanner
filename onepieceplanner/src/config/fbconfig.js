import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyAB46S_i2bIvv1l1Gr9xETfayRSAodV0hQ',
	authDomain: 'onepieceplanner-2668f.firebaseapp.com',
	projectId: 'onepieceplanner-2668f',
	storageBucket: 'onepieceplanner-2668f.appspot.com',
	messagingSenderId: '932783811470',
	appId: '1:932783811470:web:411c74e0e13088648552df',
	measurementId: 'G-76K4SPZ568',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

var db = firebase.firestore();

export {auth, provider};
export default db;
