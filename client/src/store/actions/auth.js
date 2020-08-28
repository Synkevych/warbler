import { apiCall, setTokenHeader } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function setAthorizationToken(token){
	setTokenHeader(token);
}

export function logout(){
	return dispatch => {
		localStorage.clear();
		setAthorizationToken(false);
		dispatch(setCurrentUser({}));
	}
}

export function authUser(type, userData) {
	return dispatch => {
		//wrap our thunk in a promise so we can wait for the API call 
		return new Promise((resolve, reject) => {
			return apiCall('post', `/api/auth/${type}`, userData)
			.then(({ token, ...user }) => {
					localStorage.setItem('jwtToken', token);
					setAthorizationToken(token);
					console.log("authUser", token);
					dispatch(setCurrentUser(user));
					dispatch(removeError());
					resolve(); // indicate that the API call succeeded
				}).catch(error => {
					console.log("error", error);
					dispatch(addError(error.message));
					reject(); // indicate the API call failed 
				});
		});
	};
}
