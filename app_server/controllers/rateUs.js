/* GET the Rate Us page */
const rateUs = (req, res) => {
    res.render('rateUs', {title: 'Rate Us'});
};

module.exports = {
    rateUs
}