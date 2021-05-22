class API {
	private baseURL = '';
	private header: RequestInit['headers'] = {
		'Content-type': 'application/json',
	};
	private getHeaders(options: RequestInit['headers']) {
		return {
			...this.header,
			...options,
		};
	}

	post(url = '', options: RequestInit) {
		return window.fetch(`${this.baseURL}/${url}`, { headers: this.getHeaders(options.headers), ...options });
	}

	get(url = '/', options: RequestInit) {
		return window.fetch(`${this.baseURL}/${url}`, { headers: this.getHeaders(options.headers), ...options });
	}
}

const request = new API();

export default request;
