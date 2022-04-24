// ./utils/request.js
import authService from "./services/auth";

export default function request(url, options = {}) {
	const customHeaders = {};
	if (authService.isLogged()) {
			customHeaders.Authorization = "Bearer " + authService.token;
  }

	return fetch(url, {
		...options,
		headers: {
			...(options.headers || {}),
			...customHeaders
		}
	})
}