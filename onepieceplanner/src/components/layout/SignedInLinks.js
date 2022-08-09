import React, {useEffect, useState} from 'react';
import {NavLink, renderMatches, useNavigate} from 'react-router-dom';
import {auth} from '../../config/fbconfig';
import firebase from 'firebase';
import SignedOutLinks from './SignedOutLinks';
import SignedInNavbar from './SignedInNavbar';
import SignedOutNavbar from './SignedOutNavbar';
import db from '../../config/fbconfig';
//import logo from '../../../public/img/background.jpg';
//			<img width="50" height="50" src={logo} />

const SignedInLinks = () => {
	const loggedOutLinks = document.querySelectorAll('.logged-out');
	const loggedInLinks = document.querySelectorAll('.logged-in');
	const navigate = useNavigate();
	var currentUser = firebase.auth().currentUser;
	const [initials, setInitials] = useState([]);

	const fetchInitials = async () => {
		db.collection('users')
			.where('email', '==', currentUser.email)
			.get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					// doc.data() is never undefined for query doc snapshots
					const firstName = doc.data().authorFirstName;
					const stringFirstName = String(firstName);
					const firstInitial = stringFirstName.substring(0, 1);

					const lastName = doc.data().authorLastName;
					const stringLastName = String(lastName);
					const lastInitial = stringLastName.substring(0, 1);

					const fullInitials = firstInitial + lastInitial;
					setInitials([...initials, fullInitials]);
				});
			});
	};

	useEffect(() => {
		fetchInitials();
	}, []);

	const login = async ({email, password}) => {
		const res = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);

		return res.user;
	};
	/* TODO: Figure document.getElement = null error*/
	/*if (document.getElementById('logout') != null) {
		document.getElementById('logout').onclick = function () {
			auth.signOut().then(() => {
				console.log('user signed out');
			});
		};
	} else {
		console.log('no user');
	}*/
	const logoutUser = () => {
		firebase
			.auth()
			.signOut()
			.then(function () {
				console.log('sign-out successful');
			})
			.catch(function (error) {
				console.log('uh oh');
			});
		navigate('/');
	};

	return (
		<div>
<<<<<<< HEAD
			<NavLink to="OnePiecePlanner/dashin" className="brand-logo">
=======
			<NavLink to="/OnePiecePlanner/dashin" className="brand-logo">
>>>>>>> gh-pages
				One Piece Planner
			</NavLink>
			<ul className="right">
				<li class="logged-in">
<<<<<<< HEAD
					<NavLink to="OnePiecePlanner/create">New Project</NavLink>
				</li>
				<li className="logged-in">
					<NavLink to="/OnePiecePlanner" onClick={logoutUser}>
=======
					<NavLink to="/OnePiecePlanner/create">New Project</NavLink>
				</li>
				<li className="logged-in">
					<NavLink to="/OnePiecePlanner/" onClick={logoutUser}>
>>>>>>> gh-pages
						Logout
					</NavLink>
				</li>
				<li class="logged-in">
					<NavLink
<<<<<<< HEAD
						to="OnePiecePlanner/dashin"
=======
						to="/OnePiecePlanner/dashin"
>>>>>>> gh-pages
						className="btn btn-floating pink lighten-1">
						{initials}
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SignedInLinks;
