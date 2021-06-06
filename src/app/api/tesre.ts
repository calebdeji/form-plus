import axios from 'axios';

const request = axios.create({
	baseURL: process.env.REACT_APP_API_URL || '',
});

request.interceptors.request.use((config) => {
	const newConfig = { ...config };

	newConfig.headers = {
		...newConfig.headers,
		'Content-type': 'application/json',
	};

	return newConfig;
});

export default request;
