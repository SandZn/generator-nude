import Users from '../users/users.model.js';
import config from '../../config';
import jwt from 'jsonwebtoken';
import encode from '../encode/encode.helper.js';

let publicFields = '-__v -password';

module.exports = {local};

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

  let email = req.body.email;
  let password = encode(req.body.password);

  Users
    .findOne({email, password}, publicFields)
    .then(response);

  function response(user) {
    if (!user) {
      let message = 'authentication failed';
      return res
        .status(401)
        .json({message});
    }

    let id = user.id;
    let token = jwt.sign(user, config.secret, config.token);

    res.json({id, token});
  }
};
