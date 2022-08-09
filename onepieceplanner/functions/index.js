const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onUserCreateProject = functions.firestore
	.document('projects/{authorFirstName}')
	.onCreate(async (snap, context) => {
		const values = snap.data();
		await console.log('A project was created');
	});
