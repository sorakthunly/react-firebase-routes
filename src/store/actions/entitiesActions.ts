import { EntitiesState } from '../reducers/entitiesReducer';

export enum EEntitiesAction {
	ADD_ENTITIES = 'ADD_ENTITIES',
	REMOVE_ENTITIES = 'REMOVE_ENTITIES'
}

export const addEntities = (payload: EntitiesState) => ({
	payload,
	type: EEntitiesAction.ADD_ENTITIES
});

export type AddEntities = typeof addEntities;

export type AddEntitiesAction = ReturnType<AddEntities>;

export type EntitiesAction = AddEntitiesAction;
