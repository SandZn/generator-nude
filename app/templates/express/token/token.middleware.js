'use strict';

let bluebird = require('bluebird');
let jwt = require('jsonwebtoken');
let config = require('../../config');
jwt = bluebird.promisifyAll(jwt);

module.exports = validateToken;

function validateToken(req, res, next) {
  let token = req.headers.token
    || req.body.token
    || req.query.token;

  if (!token) {
    let message = 'no token provided';
    return res
      .status(401)
      .json({message});
  }

  jwt
    .verifySync(token, config.secret)
    .then(decodeToken)
    .then(() => next())
    .catch(invalidToken);
}

function invalidToken(err) {
  let message = 'invalid token';
  return res
    .status(401)
    .json({message});
}

function decodeToken(token) {
  req.decoded = token;
  return token;
}
