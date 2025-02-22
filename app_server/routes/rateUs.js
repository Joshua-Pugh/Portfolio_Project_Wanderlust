var express = require('express');
var router = express.Router();
const controller = require('../controllers/rateUs');

/* GET Rate Us page. */
router.get('/', controller.rateUs);

module.exports = router;