const bcrypt = require("bcrypt")
const session = require('express-session');
const moment = require('moment');

var isUserLoggedin = false;


exports.Home = (req, res, next) => {
    res.render('home', { pageTitle: "Home", isLoggedIn: isUserLoggedin });
};
