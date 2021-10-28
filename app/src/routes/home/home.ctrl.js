"use strict";

const UserStorage = require("../../models/UserStorage");
const output = {
    hello: (req, res) => {
        res.render("home/index"); //home은 views의 home
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;
        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id); // idx id의 인덱스
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "Login failed.";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};