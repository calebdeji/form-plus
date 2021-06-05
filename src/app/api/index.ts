// import request from './request';
import mockResponse from '../assets/data/mock';
import { GenericResponse } from './types';

const fetchAllContents = async () => {
	// return await request.get('');
	//TODO	use the normal request to get data from the endpoint
	//the below method is used to save MB
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			const response: GenericResponse<any> = {
				data: mockResponse,
				config: {},
				headers: {},
				message: '',
				status: 200,
				statusText: '',
			};
			resolve(response);
		}, 3000);
	});
};

const api = {
	fetchAllContents,
};

export default api;
