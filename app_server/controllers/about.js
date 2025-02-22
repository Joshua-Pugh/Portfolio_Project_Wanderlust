/* Only for development */
var fs = require('fs');
var aboutContent = JSON.parse(fs.readFileSync('./data/aboutContent.json', 'utf-8'));

/* GET the About page */
const about = (req, res) => {
    console.log(aboutContent);
    res.render('about', {title: 'About', aboutContent});
};

module.exports = {
    about
}