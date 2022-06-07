import React from 'react';
import {useEffect, useState} from 'react';
import ProjectSummary from './ProjectSummary';
import {db} from '../../config/fbConfig';
import {collection, getDocs} from 'firebase/firestore';

const ProjectList = ({projects}) => {
	return (
		<div className="project-list section">
			{projects &&
				projects.map(project => {
					return <ProjectSummary project={project} key={project.id} />;
				})}
		</div>
	);
};

export default ProjectList;
