/* GET the Login page */
const login = (req, res) => {
    res.render('login', {title: 'Login'});
};

module.exports = {
    login
}