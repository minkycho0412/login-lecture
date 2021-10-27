"use strict";

const hello = (req, res) => {
    res.render("home/index"); //home은 views의 home
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};