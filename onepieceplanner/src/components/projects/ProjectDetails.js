import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import db from '../../config/fbconfig';
import {useLocation} from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = props => {
	let {id} = useParams();
	let location = useLocation();
	const projectID = Number(location.pathname.slice(9));
	console.log(projectID);

	const [info, setInfo] = useState([]);

	const fetchProject = async () => {
		db.collection('projects')
			.where('projectID', '==', projectID)
			.get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(element => {
					var data = element.data();
					setInfo(arr => [...arr, data]);
				});
			});
	};

	useEffect(() => {
		fetchProject();
	}, []);

	return (
		<div>
			{info.map(data => (
				<DetailsFrame
					title={data.title}
					content={data.content}
					authorFirstName={data.authorFirstName}
					authorLastName={data.authorLastName}
					createdAt={data.createdAt}
					projectID={data.projectID}
				/>
			))}
		</div>
	);
};

const DetailsFrame = ({
	title,
	content,
	authorFirstName,
	authorLastName,
	createdAt,
	projectID,
}) => {
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">
						{title}- {projectID}
					</span>
					<p>{content}</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>
						Posted by {authorFirstName} {authorLastName}
					</div>
					<div>Created {moment(createdAt.toDate().toString()).calendar()}</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
