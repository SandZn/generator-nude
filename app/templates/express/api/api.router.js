import api from '../controllers.js';
import middlewares from '../middlewares.js';
import {Router} from 'express';

const router = Router();

router.param('id', middlewares.id);

router
  .route('/authentication')
  .post(api.authentication.local);

router.use(middlewares.token);

router
  .route('/users')
  .get(api.users.list)
  .post(api.users.create);

router
  .route('/users/:id')
  .get(api.users.single)
  .put(api.users.update)
  .delete(api.users.remove);

router.use(resourceNotFound);

function resourceNotFound(req, res) {
  let message = 'resource not found :(';
  res
    .status(404)
    .json({message});
}

module.exports = router;
