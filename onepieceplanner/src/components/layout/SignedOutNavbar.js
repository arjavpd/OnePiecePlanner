import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignedOutNavbar = props => {
	var currentUser = firebase.auth().currentUser;

	return (
		<nav className="nav-wrapper blue darken-3">
			<div className="container">
				<SignedOutLinks />
			</div>
		</nav>
	);
};

export default SignedOutNavbar;
