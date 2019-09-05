export enum EProjectAction {
	FETCH_PROJECT_START = 'FETCH_PROJECT_START',
	FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS',
	FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE',
	FETCH_PROJECTS_START = 'FETCH_PROJECTS_START',
	FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS',
	FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE'
}

export const fetchProjectStart = (projectId: number) => ({
	payload: projectId,
	type: EProjectAction.FETCH_PROJECT_START
});

export const fetchProjectSuccess = () => ({
	payload: null,
	type: EProjectAction.FETCH_PROJECT_SUCCESS
});

export const fetchProjectFailure = (error: Error) => ({
	payload: error,
	type: EProjectAction.FETCH_PROJECT_FAILURE
});

export const fetchProjectsStart = () => ({
	payload: null,
	type: EProjectAction.FETCH_PROJECTS_START
});

export const fetchProjectsSuccess = (projectIds: number[]) => ({
	payload: projectIds,
	type: EProjectAction.FETCH_PROJECTS_SUCCESS
});

export const fetchProjectsFailure = (error: Error) => ({
	payload: error,
	type: EProjectAction.FETCH_PROJECTS_FAILURE
});

export type FetchProjectStartAction = ReturnType<typeof fetchProjectStart>;
export type FetchProjectSuccessAction = ReturnType<typeof fetchProjectSuccess>;
export type FetchProjectFailureAction = ReturnType<typeof fetchProjectFailure>;
export type FetchProjectsStartAction = ReturnType<typeof fetchProjectsStart>;
export type FetchProjectsSuccessAction = ReturnType<typeof fetchProjectsSuccess>;
export type FetchProjectsFailureAction = ReturnType<typeof fetchProjectsFailure>;

export type ProjectAction =
	| FetchProjectStartAction
	| FetchProjectSuccessAction
	| FetchProjectFailureAction
	| FetchProjectsStartAction
	| FetchProjectsSuccessAction
	| FetchProjectsFailureAction;
