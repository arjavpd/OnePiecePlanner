import db from '../../config/fbConfig';
import {useState} from 'react';

const SignUp = () => {
	const [authorFirstName, SetFirstName] = useState('');
	const [authorLastName, SetLastName] = useState('');
	const [email, SetEmail] = useState('');
	const [password, SetPassword] = useState('');
	const sub = e => {
		e.preventDefault();

		// Add data to the store
		db.collection('users')
			.add({
				authorFirstName: authorFirstName,
				authorLastName: authorLastName,
				email: email,
				password: password,
			})
			.then(docRef => {
				alert('Account Created!');
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
				<h5 className="grey-text text-darken-3">Sign Up</h5>
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
					<label htmlFor="title">Email</label>
					<input
						type="email"
						onChange={e => {
							SetEmail(e.target.value);
						}}
					/>
				</div>
				<div className="input-field">
					<label htmlFor="title">Password</label>
					<input
						type="password"
						onChange={e => {
							SetPassword(e.target.value);
						}}
					/>
				</div>
				<button className="btn pink lighten-1 z-depth-0" type="submit">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;

/*
import React, {Component} from 'react';

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign Up</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Sign Up</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
*/
