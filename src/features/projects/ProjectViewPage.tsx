import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { fetchProject } from '../../store/actions/projectsAsyncActions';
import { selectProjectByIdFromState } from './projectsSelectors';

type RouteMatchParams = {
	projectId?: string;
};

const ProjectViewPage: React.FC<RouteComponentProps<RouteMatchParams>> = props => {
	const dispatch = useDispatch();
	const {
		match: {
			params: { projectId: projectIdParam }
		}
	} = props;

	const projectId = Number(projectIdParam);
	const project = useSelector(selectProjectByIdFromState(projectId));
	if (!project) {
		dispatch(fetchProject(projectId));
	}

	return <Container className="py-3">{project && <h1>{project.name}</h1>}</Container>;
};

export default withRouter(ProjectViewPage);
