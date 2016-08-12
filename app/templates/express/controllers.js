'use strict';

var api = {
	authentication: require('./authentication/authentication.controller.js'),
	users: require('./users/users.controller.js'),
};

module.exports = {api};
