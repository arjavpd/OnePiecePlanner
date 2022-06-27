// Import Firestore database
import db from '../../config/fbConfig';
import {useState, useEffect, setValue} from 'react';
import Notifications from './Notifications';
import moment from 'moment';
import firebase from 'firebase';
import SignedInNavbar from '../layout/SignedInNavbar';

const DashboardOut = () => {
	return (
		<div>
			<p>Welcome to One Piece Planner, for all your pirating planning needs!</p>
			<h2 className="center">Sign up or sign in to get started</h2>
		</div>
	);
};

export default DashboardOut;
