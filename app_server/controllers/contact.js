/* Only for development */
var fs = require('fs');
var contactInfo = JSON.parse(fs.readFileSync('./data/contactInfo.json', 'utf-8'));


/* GET the Contact page */
const contact = (req, res) => {
    res.render('contact', {title: 'Contact', contactInfo});
};

module.exports = {
    contact
}