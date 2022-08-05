// Import Firestore database
import db from '../../config/fbconfig';
import {useState, useEffect} from 'react';
import Notifications from './Notifications';
import moment from 'moment';
import firebase from 'firebase';
import SignedInNavbar from '../layout/SignedInNavbar';
import {Link} from 'react-router-dom';

const DashboardIn = () => {
	const [info, setInfo] = useState([]);

	console.log('state = unknown (until the callback is invoked)');

	// Fetch the required data using the get() method
	const Fetchdata = () => {
		db.collection('projects')
			.orderBy('createdAt', 'desc')
			.get()
			.then(querySnapshot => {
				// Loop through the data and store
				// it in array to display
				querySnapshot.forEach(element => {
					var data = element.data();
					setInfo(arr => [...arr, data]);
				});
			});
	};
	useEffect(() => {
		Fetchdata();
	}, []);
	// Display the result on the page
	return (
		<div className="dashboard container">
			<br></br>
			<div className="row">
				<div className="col s12 m6 ">
					{info.map(data => (
						<Frame
							title={data.title}
							content={data.content}
							authorFirstName={data.authorFirstName}
							authorLastName={data.authorLastName}
							createdAt={data.createdAt}
							projectID={data.projectID}
						/>
					))}
				</div>
				<div className="col s12 m5 offset-m1">
					<Notifications />
				</div>
			</div>
		</div>
	);
};

// Define how each display entry will be structured
const Frame = ({
	title,
	content,
	authorFirstName,
	authorLastName,
	createdAt,
	projectID,
}) => {
	console.log(projectID);
	return (
		<Link
			to={{
				pathname: '/project/' + projectID,
			}}
			state={{test: 'mystate'}}>
			<div className="card z-depth-0 project-summary">
				<div className="card z-depth-0 project-summary">
					<div className="card-content grey-text text-darken-3">
						<span className="card-title ">{title}</span>
						<p>
							Posted by {authorFirstName} {authorLastName}
						</p>
						<p>Content: {content}</p>
						<p className="grey-text">
							{moment(createdAt.toDate().toString()).calendar()}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default DashboardIn;
