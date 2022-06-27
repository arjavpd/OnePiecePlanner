import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import db from '../../config/fbConfig';

const Project = ({
	title,
	content,
	authorFirstName,
	authorLastName,
	createdAt,
	projectID,
}) => {
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
	</div>;
};

export default Project;
