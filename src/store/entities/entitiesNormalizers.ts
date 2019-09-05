import { normalize } from 'normalizr';
import { Projects } from '../../features/projects/projectsTypes';
import { projectSchema } from './entitiesSchemas';

export const normalizeProjects = (data: Projects) => {
	return normalize(data, [projectSchema]);
};
