import db from '../../config/fbConfig';
import {useState} from 'react';

const CreateProject = () => {
	const [authorFirstName, SetFirstName] = useState('');
	const [authorLastName, SetLastName] = useState('');
	const [title, SetTitle] = useState('');
	const [content, SetContent] = useState('');
	const sub = e => {
		e.preventDefault();

		// Add data to the store
		db.collection('projects')
			.add({
				authorFirstName: authorFirstName,
				authorLastName: authorLastName,
				content: content,
				title: title,
			})
			.then(docRef => {
				alert('Project Created!');
			})
			.catch(error => {
				console.error('Oof something went wrong: ', error);
			});
	};

	return (
		<div className="container">
			<form
				className="white"
				onSubmit={event => {
					sub(event);
				}}>
				<h5 className="grey-text text-darken-3">Create Project</h5>
				<div className="input-field">
					<label htmlFor="title">First Name</label>
					<input
						type="text"
						id="title"
						onChange={e => {
							SetFirstName(e.target.value);
						}}
					/>
				</div>
				<div className="input-field">
					<label htmlFor="title">Last Name</label>
					<input
						type="text"
						onChange={e => {
							SetLastName(e.target.value);
						}}
					/>
				</div>
				<div className="input-field">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						onChange={e => {
							SetTitle(e.target.value);
						}}
					/>
				</div>
				<div className="input-field">
					<label htmlFor="title">Content</label>
					<input
						type="text"
						onChange={e => {
							SetContent(e.target.value);
						}}
					/>
				</div>
				<button className="btn pink lighten-1 z-depth-0" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default CreateProject;
