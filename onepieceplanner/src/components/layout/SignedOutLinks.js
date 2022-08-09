import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<div>
			<NavLink to="/OnePiecePlanner" className="brand-logo">
				One Piece Planner
			</NavLink>
			<ul className="right">
				<li>
					<NavLink to="/OnePiecePlanner/signup">Signup</NavLink>
				</li>
				<li>
					<NavLink to="/OnePiecePlanner/signin">Login</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SignedOutLinks;
