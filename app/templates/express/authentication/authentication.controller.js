'use strict';

let Users = require('../users/users.model.js');
let config = require('../../config');
let bluebird = require('bluebird');
let jwt = require('jsonwebtoken');
jwt = bluebird.promisifyAll(jwt);
let encode = require('../encode/encode.helper.js');
let publicFields = '-__v -password';

let AuthenticationController = {local};

module.exports = AuthenticationController;

function local(req, res) {
  /**
    * @api {POST} /authentication local
    * @apiDescription Authentication user with local strategy
    * @apiName local
    * @apiGroup Auth
    * @apiPermission Public
    *
    * @apiParam {String} email email of user
    * @apiParam {String} password password of user
    */
  let password = encode(req.body.password);
  let email = req.body.email;

  Users
    .findOne({email, password}, publicFields)
    .then(function(user) {
      if (!user) {
        let message = 'authentication failed';
        return res
          .status(401)
          .json({message});
      }

      let id = user.id;
      let token = jwt.sign(user, config.secret, config.token);

      res.json({
        id,
        token,
      });

    });
};
