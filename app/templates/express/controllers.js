'use strict';

var api = {
	authentication: require('./auth/authentication.controller.js'),
	users: require('./users/users.controller.js'),
};

module.exports = {api};
