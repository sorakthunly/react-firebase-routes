import { ActionCreator } from 'redux';

import projects from '../../database/projects.json';

import { addEntities } from './entitiesActions';
import { fetchProjectsStart, fetchProjectsSuccess, fetchProjectStart, fetchProjectSuccess } from './projectsActions';
import { normalizeProjects } from '../entities/entitiesNormalizers';
import { PromiseThunkAction } from '../../common/types/redux';

export type FetchProject = ActionCreator<PromiseThunkAction>;
export type FetchProjects = ActionCreator<PromiseThunkAction>;

export const fetchProject: FetchProject = (projectId: number) => dispatch => {
	dispatch(fetchProjectStart(projectId));

	const matchedProject = projects.find(project => project.id === projectId);
	const { entities } = normalizeProjects([matchedProject]);
	dispatch(addEntities(entities));
	dispatch(fetchProjectSuccess());

	return Promise.resolve();
};

export const fetchProjects: FetchProjects = () => dispatch => {
	dispatch(fetchProjectsStart());

	const { entities, result } = normalizeProjects(projects);
	dispatch(addEntities(entities));
	dispatch(fetchProjectsSuccess(result));

	return Promise.resolve();
};
