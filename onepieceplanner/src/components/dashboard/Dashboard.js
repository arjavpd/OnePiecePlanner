// Import Firestore database
import db from '../../config/fbConfig';
import {useState} from 'react';
import Notifications from './Notifications';
import moment from 'moment';

const Dashboard = () => {
	const [info, setInfo] = useState([]);

	// Start the fetch operation as soon as
	// the page loads
	window.addEventListener('load', () => {
		Fetchdata();
	});

	// Fetch the required data using the get() method
	const Fetchdata = () => {
		db.collection('projects')
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

	// Display the result on the page
	return (
		<div className="dashboard container">
			<div className="row">
				<div className="col s12 m6 ">
					<br></br>
					{info.map(data => (
						<Frame
							title={data.title}
							content={data.content}
							authorFirstName={data.authorFirstName}
							authorLastName={data.authorLastName}
							createdAt={data.createdAt}
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
}) => {
	console.log(createdAt);
	return (
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
	);
};

export default Dashboard;
