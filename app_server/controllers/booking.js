/* Only for development */
var fs = require('fs');
var roomOptions = JSON.parse(fs.readFileSync('./data/roomOptions.json', 'utf-8'));
var foodOptions = JSON.parse(fs.readFileSync('./data/foodOptions.json', 'utf-8'));

/* GET the Booking page */
const booking = (req, res) => {
    res.render('booking', {title: 'Booking', roomOptions, foodOptions});
};

module.exports = {
    booking
}