const router = require('express').Router();
const { fileUpload } = require('../controllers/file.controller');

router.post('/upload', fileUpload);

module.exports = router;
