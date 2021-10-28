"use strict";

const User = require("../../models/User");
const output = {
    hello: (req, res) => {
        res.render("home/index"); //home은 views의 home
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body); //User class body로 들어감
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};