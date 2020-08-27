const dotenv = require('dotenv').config();

const jwt = require('jsonwebtoken');

// make sure the user is logged - Authentication
exports.loginRequired = function(req, res, next) {
	try {
		const token = req.headers.authorization.split(' ')[1];
		jwt.verify(token, dotenv.parsed.SECRET_KEY, function(err, decoded) {
			console.log('decoded ? ', decoded);
			if (decoded) {
				next();
			} else {
				console.log("login first!");
				return next({
					status: 401,
					message: 'Please log in first!'
				});
			}
		});
	} catch (error) {
		return next({
			status: 401,
			message: 'Please log in first!'
		});
	}
};

// /api/users/:id/messages - prevent change not user messages
exports.ensureCorrectUser = function(req, res, next) {
	try {
		const token = req.headers.authorization.split(' ')[1];
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
			console.log("token", token);
			console.log("decoded", decoded);
			if (decoded && decoded.id === req.params.id) {
				return next();
			} else {
				console.log(err);
				return next({
					status: 401,
					message: 'Unauthorized'
				});
			}
		});
	} catch (error) {
		console.log('Unauthorized!');
		next({
			status: 401,
			message: 'Unauthorized'
		});
	}
};
//make sure we get the correct user - Autorization
