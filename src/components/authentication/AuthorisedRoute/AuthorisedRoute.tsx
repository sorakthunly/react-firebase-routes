import * as React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

const AuthorisedRoute: React.FC<RouteProps> = (props: RouteProps) => {
	const isLoggedIn = true;

	const loginRedirect = <Redirect push to="/login" />;
	const routeToDisplay = <Route {...props} />;

	return isLoggedIn ? routeToDisplay : loginRedirect;
};

export default AuthorisedRoute;
