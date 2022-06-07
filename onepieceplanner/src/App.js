import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Dashboard />} />
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
