import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import SignedOutNavbar from './components/layout/SignedOutNavbar';
import SignedInNavbar from './components/layout/SignedInNavbar';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

import DashboardIn from './components/dashboard/DashboardIn';
import DashboardOut from './components/dashboard/DashboardOut';
import firebase from 'firebase';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {signedInCheck: false};
	}
	componentDidMount() {
		this.checker();
	}
	checker() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({signedInCheck: true});
			} else {
				this.setState({signedInCheck: false});
			}
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{this.state.signedInCheck && <SignedInNavbar />}
					{this.state.signedInCheck == false && <SignedOutNavbar />}
					<Routes>
						<Route exact path="/" element={<DashboardOut />} />
						<Route exact path="/dashin" element={<DashboardIn />} />
						<Route path="/project/:id" element={<ProjectDetails />} />

						<Route path="/signin" element={<SignIn />} />
						<Route path="/signUp" element={<SignUp />} />
						<Route path="/create" element={<CreateProject />} />
					</Routes>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

/*
{(() => {
						if (currentUser == null) {
							isLoggedIn = true;
						} else if (currentUser.email == 'test@test.com') {
							isLoggedIn = true;
						}
					})()}
					{isLoggedIn ? <SignedInNavbar /> : <SignedOutNavbar />}
*/
