// Import Firestore database
import db from '../../config/fbconfig';
import {useState, useEffect, setValue} from 'react';
import Notifications from './Notifications';
import moment from 'moment';
import firebase from 'firebase';
import SignedInNavbar from '../layout/SignedInNavbar';

const DashboardOut = () => {
	const imageColumn = {
		color: 'white',
		backgroundColor: 'DodgerBlue',
		padding: '10px',
	};
	return (
		<div class="center">
			<br></br>

			<img
				src="https://pixy.org/download/573133/"
				width="300 px"
				height="270 px"></img>
			<h4>Created by Arjav Prasad</h4>

			<h4>This app uses ReactJS, Firebase and Materilize CSS</h4>
		</div>
	);
};

export default DashboardOut;
