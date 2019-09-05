import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import AuthorisedRoute from './components/authentication/AuthorisedRoute/AuthorisedRoute';
import LoginPage from './features/authentication/LoginPage';
import ProjectsLayout from './features/projects/ProjectsLayout';
import SignupPage from './features/authentication/SignupPage';

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={LoginPage} />
				<Route path="/signup" component={SignupPage} />
				<AuthorisedRoute path="/projects" component={ProjectsLayout} />
				<Redirect to="/projects" />
			</Switch>
		</Router>
	);
};

export default App;
