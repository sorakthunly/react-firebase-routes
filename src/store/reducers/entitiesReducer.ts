import { Reducer } from 'react';

import { EntitiesAction, EEntitiesAction } from '../actions/entitiesActions';
import { Entity } from '../entities/entitiesTypes';
import { Project } from '../../features/projects/projectsTypes';

export type EntitiesState = {
	projects?: Entity<Project>;
};

type EntitiesReducer = Reducer<EntitiesState, EntitiesAction>;

const entitiesReducer: EntitiesReducer = (state = {}, action) => {
	switch (action.type) {
		case EEntitiesAction.ADD_ENTITIES:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};

export default entitiesReducer;
