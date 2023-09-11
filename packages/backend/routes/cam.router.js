const router = require('express').Router();
const { camData } = require('../controllers/cam.controller');

router.post('/data', camData);

module.exports = router;
