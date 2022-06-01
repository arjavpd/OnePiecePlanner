import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

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
