import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import firebase from 'firebase/app';
import 'firebase/auth';

var user = firebase.auth().currentUser;

const Navbar = props => {
	return (
		<nav className="nav-wrapper blue darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">
					One Piece Planner
				</Link>
				<SignedInLinks />
				<SignedOutLinks />
			</div>
		</nav>
	);
};

export default Navbar;
