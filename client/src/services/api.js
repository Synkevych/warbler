import axios from 'axios';

// set tokent when send request to messages
export function setTokenHeader(token) {
	console.log("token",token);
	if (token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Authorization'];
	}
}

/**
 * A wraper around axios API call that formats error, etc
 * @param {string} method the HTTP verb you want to use
 * @param {string} path the route path / endpoint
 * @param {object} data (optional) data is JSON from for POST requests
 */

export function apiCall(method, path, data) {
	return new Promise((resolve, reject) => {
		return axios[method.toLowerCase()](path, data)
			.then(res => {
				return resolve(res.data);
			})
			.catch(error => {
				return reject(error.response.data.error);
			});
	});
}
