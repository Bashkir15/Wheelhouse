import express from 'express';
import auth from '../helpers/auth';

var router = express.Router();
var users = require('../controllers/users.server.controller')();

router.post('/', users.create);
router.post('/authenticate', users.authenticate);
router.get('/:name', auth.justGetUser, users.single);
router.post('/:name/follow', auth.ensureAuthorized, users.follow);
router.post('/:name/unfollow', auth.ensureAuthorized, users.unfollow);
router.get('/:name/profile', auth.justGetUser, users.profile);

module.exports = router;