var express = require('express');
var router = express.Router();
const controller = require('../controllers/signUp');

/* GET Sign Up page. */
router.get('/', controller.signUp);

module.exports = router;