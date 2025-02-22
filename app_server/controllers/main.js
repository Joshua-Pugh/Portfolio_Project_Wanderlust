/* Only for development */
var fs = require('fs');
var slides = JSON.parse(fs.readFileSync('./data/slides.json', 'utf-8'));
var topDestinations = JSON.parse(fs.readFileSync('./data/topDestinations.json', 'utf-8'));
var blogs = JSON.parse(fs.readFileSync('./data/blogs.json', 'utf-8'));
var testimonials = JSON.parse(fs.readFileSync('./data/testimonials.json', 'utf-8'));

/* GET the Home page */
const index = (req, res) => {
    res.render('index', {title: 'Wanderlust Travel Agency', slides, topDestinations, blogs, testimonials});
};

module.exports = {
    index
}