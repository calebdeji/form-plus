import request from './request';
import { GenericResponse, Template } from './types';

const fetchAllContents = async () => {
	return await request.get<GenericResponse<Array<Template>>>('');
};

const api = {
	fetchAllContents,
};

export default api;
