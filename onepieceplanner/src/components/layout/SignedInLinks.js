import React from 'react';
import {NavLink} from 'react-router-dom';
import {auth} from '../../config/fbConfig';

const SignedInLinks = () => {
	return (
		<div>
			<ul className="right">
				<li class="">
					<NavLink to="/create">New Project</NavLink>
				</li>
				<li className="logged-in">
					<a href="#" id="logout">
						Logout
					</a>
				</li>
				<li>
					<NavLink to="/" className="btn btn-floating pink lighten-1">
						AP
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SignedInLinks;
