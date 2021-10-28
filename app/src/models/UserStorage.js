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

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
        }, {});

        return userInfo;
    }
    
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;