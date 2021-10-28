"use strict";

const output = {
    hello: (req, res) => {
        res.render("home/index"); //home은 views의 home
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["minky", "조민경", "밍키"],
    psword: ["1234", "1234", "1234"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id); // idx id의 인덱스
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "Login failed.",
        });
    },
};

module.exports = {
    output,
    process,
};