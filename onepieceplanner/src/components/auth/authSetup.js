import firebase from 'firebase/app';
import 'firebase/auth';
import {auth} from '../../config/fbConfig';
import SignedOutLinks from '../layout/SignedOutLinks';

export const register = async ({email, password}) => {
	const resp = await firebase
		.auth()
		.createUserWithEmailAndPassword(email, password);
	console.log('as');
	return resp.user;
};

export const login = async ({email, password}) => {
	const res = await firebase.auth().signInWithEmailAndPassword(email, password);
	return res.user;
};
/* TODO: Figure document.getElement = null error*/
if (document.getElementById('logout') != null) {
	document.getElementById('logout').onclick = function () {
		auth.signOut().then(() => {});
	};
}
