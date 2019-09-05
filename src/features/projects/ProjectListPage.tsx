import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { fetchProjects } from '../../store/actions/projectsAsyncActions';
import { routeTo } from '../../utils/route';
import { selectProjectsFromState } from './projectsSelectors';

const ProjectListPage: React.FC<RouteComponentProps> = props => {
	const dispatch = useDispatch();
	const projects = useSelector(selectProjectsFromState);
	if (!projects) {
		dispatch(fetchProjects());
	}

	return (
		<Container className="py-3">
			{projects &&
				projects.map((project, index) => {
					const isNotLastIndex = index !== projects.length - 1;
					const className = isNotLastIndex ? 'mb-3' : undefined;

					const { id, description, name } = project;

					const {
						match: { url }
					} = props;
					const projectUrl = `${url}/${project.id}`;
					const routeToProject = routeTo(props, projectUrl);

					return (
						<Card className={className} key={id} onClick={routeToProject}>
							<Card.Body>
								<Card.Title>{name}</Card.Title>
								<Card.Text>{description}</Card.Text>
							</Card.Body>
						</Card>
					);
				})}
		</Container>
	);
};

export default ProjectListPage;
