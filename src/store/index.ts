import reduxThunk from 'redux-thunk';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import entitiesReducer from './reducers/entitiesReducer';
import projectsReducer from './reducers/projectsReducer';

const rootReducer = combineReducers({
	entities: entitiesReducer,
	projects: projectsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
	const middlewares = [reduxThunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const reduxDevTools = composeWithDevTools(middlewareEnhancer);
	const store = createStore(rootReducer, reduxDevTools);

	return store;
};

export default configureStore;
