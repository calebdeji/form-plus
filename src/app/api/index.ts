// import request from './request';
// import { GenericResponse, Template } from './types';
import mockResponse from 'app/assets/data/mock';

const fetchAllContents = async () => {
	// return await request.get<GenericResponse<Array<Template>>>('');
	return await new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: mockResponse,
			});
		}, 2000);
	});
};

const api = {
	fetchAllContents,
};

export default api;
