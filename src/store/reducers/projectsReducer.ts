import { Reducer } from 'redux';

import { ProjectAction, EProjectAction } from '../actions/projectsActions';

export type ProjectsState = {
	isFetchingProject: boolean;
	isFetchingProjects: boolean;
	selectedProjectId?: number;
	projectIds?: number[];
};

const initialState: ProjectsState = {
	isFetchingProject: false,
	isFetchingProjects: false
};

type ProjectsReducer = Reducer<ProjectsState, ProjectAction>;

const projectsReducer: ProjectsReducer = (state = initialState, action) => {
	switch (action.type) {
		case EProjectAction.FETCH_PROJECT_START:
			return {
				...state,
				isFetchingProject: true,
				selectedProjectId: action.payload as number
			};

		case EProjectAction.FETCH_PROJECT_SUCCESS:
			return {
				...state,
				isFetchingProject: false
			};

		case EProjectAction.FETCH_PROJECTS_START:
			return {
				...state,
				isFetchingProjects: true
			};

		case EProjectAction.FETCH_PROJECTS_SUCCESS:
			return {
				...state,
				isFetchingProjects: false,
				projectIds: action.payload
			};

		default:
			return state;
	}
};

export default projectsReducer;
