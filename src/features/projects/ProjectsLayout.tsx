import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeader from '../../components/UI/AppHeader/AppHeader';
import ProjectListPage from './ProjectListPage';
import ProjectViewPage from './ProjectViewPage';

const ProjectsLayout: React.FC = () => (
	<Fragment>
		<AppHeader name="React Firebase Routes" />
		<Switch>
			<Route path="/projects" exact component={ProjectListPage}></Route>
			<Route path="/projects/:projectId" exact component={ProjectViewPage}></Route>
		</Switch>
	</Fragment>
);

export default ProjectsLayout;
