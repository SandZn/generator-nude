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

  jwt
    .verifyAsync(token, config.secret)
    .then(decodeToken)
    .catch(invalidToken);

  function decodeToken(token) {
    req.decoded = token;
    next();
  }

  function invalidToken() {
    let message = !token
      ? 'no token provided'
      : 'invalid token';

    return res
      .status(401)
      .json({message});
  }
}
