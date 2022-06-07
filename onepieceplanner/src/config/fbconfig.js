import firebase from 'firebase';

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
var db = firebase.firestore();

export default db;
