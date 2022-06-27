import db from '../../config/fbConfig';
import {useState} from 'react';
import firebase from 'firebase';
import {auth} from '../../config/fbConfig';

const CreateProject = () => {
	//const [authorFirstName, SetFirstName] = useState('');
	//const [authorLastName, SetLastName] = useState('');
	const [title, SetTitle] = useState('');
	const [content, SetContent] = useState('');

	let text = 'Mozilla';
	console.log(text.substring(2, 5));

	var currentUser = firebase.auth().currentUser;

	const sub = e => {
		db.collection('users')
			.where('email', '==', currentUser.email)
			.get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					// doc.data() is never undefined for query doc snapshots
					const authorFirstName = doc.data().authorFirstName;
					const authorLastName = doc.data().authorLastName;
					//console.log(authorFirstName);
					//console.log(doc.id, ' => ', doc.data().authorFirstName);
					db.collection('projects')
						.add({
							authorFirstName: authorFirstName,
							authorLastName: authorLastName,
							content: content,
							title: title,
							createdAt: new Date(),
							projectID: Math.floor(Math.random() * (10000 - 1) + 10000),
						})
						.then(docRef => {
							alert('Project Created!');
						})
						.catch(error => {
							alert('Oof something went wrong: ', error);
						});
				});
			})
			.catch(function (error) {
				console.log('Error getting documents: ', error);
			});

		e.preventDefault();
		const inputs = document.querySelectorAll('#title, #content');
		inputs.forEach(input => {
			input.value = '';
		});

		// Add data to the store
	};

	return (
		<div className="container">
			<form
				className="white"
				onSubmit={event => {
					sub(event);
				}}>
				<h5 className="grey-text text-darken-3">Create Project</h5>

				{/* comment 
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
							*/}
				<div className="input-field">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						id="title"
						onChange={e => {
							SetTitle(e.target.value);
						}}
					/>
				</div>
				<div className="input-field">
					<label htmlFor="title">Content</label>
					<input
						type="text"
						id="content"
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
