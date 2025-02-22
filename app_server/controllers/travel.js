
/* Only for development */
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8'));

/* GET the Travel page */
const travel = (req, res) => {
    res.render('travel', {title: 'Travel', trips});
};

module.exports = {
    travel
}