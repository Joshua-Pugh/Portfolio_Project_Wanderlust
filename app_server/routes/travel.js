var express = require('express');
var router = express.Router();
const controller = require('../controllers/travel');

/* GET Travel page. */
router.get('/', controller.travel);

module.exports = router;