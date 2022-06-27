import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignedInNavbar = props => {
	var currentUser = firebase.auth().currentUser;

	return (
		<nav className="nav-wrapper blue darken-3">
			<div className="container">
				<SignedInLinks />
			</div>
		</nav>
	);
};

export default SignedInNavbar;
