import request from './request';
import { GenericResponse, Template } from './types';
import temp from 'app/assets/data/temp';

const fetchAllContents = async () => {
	// return await request.get<GenericResponse<Array<Template>>>('');
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: temp,
			});
		}, 2000);
	});
};

const api = {
	fetchAllContents,
};

export default api;
