import axios, { AxiosRequestConfig } from 'axios';

const request = axios.create({
	baseURL: process.env.REACT_APP_BASE_ENDPOINT_URL || '',
});

request.interceptors.request.use((config) => {
	const newConfig = { ...config } as AxiosRequestConfig;

	newConfig.headers = {
		...newConfig.headers,
		'Content-type': 'application/x-www-form-urlencoded',
	};

	return newConfig;
});

export default request;
