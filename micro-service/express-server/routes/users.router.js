const router = require('express').Router();
const { createUser, getUser } = require('../controllers/user.controller');
const { validateJWT } = require('../middlewares/auth.middleware');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// create user
router.post('/create', createUser);
//get user
router.get('/get', validateJWT, getUser);

module.exports = router;
