import React from 'react';
import {useParams} from 'react-router-dom';

const ProjectDetails = props => {
	let {id} = useParams();

	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>ASdkjbdsjkfagdfgjbfdgjkjkbnfdjknb</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by AP</div>
					<div>2nd September, 2am</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
