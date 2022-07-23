"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_1 = require("./User");
class Admin {
    constructor() {
        this.listUser = [];
    }
    static renderListUser() {
        return Admin.renderListUser();
    }
    renderListUser() {
        return this.listUser;
    }
    createUser(_name, _age, _email, _group, _phone, user, pass) {
        this.listUser.forEach((element) => {
            element.user = user;
            element.pass = pass;
        });
        let users = new User_1.User(_name, _age, _email, _group, _phone);
        this.listUser.push(users);
    }
    creatAccount(user, pass) {
    }
}
exports.Admin = Admin;
