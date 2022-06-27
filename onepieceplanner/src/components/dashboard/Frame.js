import React from 'react';

// Define how each display entry will be structured
const Frame = ({
	title,
	content,
	authorFirstName,
	authorLastName,
	createdAt,
}) => {
	var currentUser = firebase.auth().currentUser;

	if (currentUser != null) {
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
	} else {
		return null;
	}
};

export default Frame;
