"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = exports.Admin = void 0;
const User_1 = require("./User");
class Admin {
    constructor() {
        this.listUser = [];
        this.user = 'admin';
        this.listUserLogin = [];
        this.pass = '123123';
    }
    renderListUser() {
        console.table(this.listUser);
    }
    createUser(_name, _age, _email, idCard, _phone, user, pass) {
        let users = new User_1.User(_name, _age, _email, idCard, _phone);
        users.user = user;
        users.pass = pass;
        this.listUser.push(users);
    }
    deleteCustomer(index) {
        this.listUser.splice(index, 1);
    }
    isCustomer(index) {
        let flag = true;
        if (this.listUser[index] == undefined) {
            flag = false;
        }
        return flag;
    }
    getAminPass() {
        return this.pass;
    }
    getAminUsers() {
        return this.user;
    }
    setAdminUser(user) {
        this.user = user;
    }
    setAdminPass(pass) {
        this.pass = pass;
    }
    getListUserLogin() {
        this.listUser.forEach((element) => {
            this.listUserLogin.push(element.getUser());
        });
        return this.listUserLogin;
    }
}
exports.Admin = Admin;
//  create Admin
exports.admin = new Admin();
