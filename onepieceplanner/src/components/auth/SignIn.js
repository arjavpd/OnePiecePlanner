import {useState} from 'react';
import {login} from './authSetup';

const SignIn = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const handleSubmit = async e => {
		e.preventDefault();
		setForm('');
		// Add data to the store
		await login(form);
	};

	return (
		<div>
			<div className="container">
				<form className="white" onSubmit={handleSubmit}>
					<h5 className="grey-text text-darken-3">Log In</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="mail"
							onChange={e => setForm({...form, email: e.target.value})}
						/>
					</div>
					<div className="input-field">
						<label htmlFor="password">
							Password (must be at least 6 characters)
						</label>
						<input
							type="password"
							onChange={e => setForm({...form, password: e.target.value})}
						/>
					</div>
					<button className="btn blue lighten-1 z-depth-0" type="reset">
						Reset
					</button>
					<br></br>
					<br></br>
					<button className="btn pink lighten-1 z-depth-0" type="submit">
						Log In
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
