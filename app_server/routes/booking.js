var express = require('express');
var router = express.Router();
const controller = require('../controllers/booking');

/* GET Booking page. */
router.get('/', controller.booking);

module.exports = router;
