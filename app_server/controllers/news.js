/* Only for development */
var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/newsData.json', 'utf-8'));

/* GET the News page */
const news = (req, res) => {
    res.render('news', {title: 'News', newsData});
};

module.exports = {
    news
}