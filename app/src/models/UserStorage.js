"uses strict";

class UserStorage {
    static #users = { //private 변수 설정 외부에서 불러올 수 없도록
        id: ["minky", "조민경", "밍키"],
        psword: ["1234", "1234", "1234"],
        name : ["민경", "민경", "민경"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;