const router = require("express").Router();
const {createUser,getUser} = require('../controllers/user.controller');

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


// create user
router.post('/create', createUser);
//get user
router.get('/get/:userId', getUser);

module.exports = router;
