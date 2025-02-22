/* GET the Sign Up page */
const signUp = (req, res) => {
    res.render('signUp', {title: 'Sign Up'});
};

module.exports = {
    signUp
}