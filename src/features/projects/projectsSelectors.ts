import idx from 'idx';

import { AppState } from '../../store';
import { Projects, Project } from './projectsTypes';

type SelectProjectsFromState = (state: AppState) => Projects;
type SelectProjectByIdFromState = (projectId: number) => (state: AppState) => Project;

export const selectProjectsFromState: SelectProjectsFromState = state => {
	return idx(state, state => {
		const {
			entities: { projects: projectsEntity },
			projects: { projectIds }
		} = state;
		const projects = projectIds.map(projectId => projectsEntity[projectId]);

		return projects;
	});
};

export const selectProjectByIdFromState: SelectProjectByIdFromState = projectId => state => {
	return idx(state, state => state.entities.projects[projectId]);
};
