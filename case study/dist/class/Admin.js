"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = exports.Admin = void 0;
const User_1 = require("./User");
class Admin {
    constructor() {
        this.listUser = [];
        this.user = 'admin';
        this.pass = '123123';
    }
    renderListUser() {
        console.table(this.listUser);
    }
    createUser(_name, _age, _email, idCard, _phone, user, pass) {
        this.listUser.forEach((element) => {
            element.user = user;
            element.pass = pass;
        });
        let users = new User_1.User(_name, _age, _email, idCard, _phone);
        let fullInfo = {
            name: users.name,
            age: users.age,
            email: users.email,
            idCard: users.idCard,
            phone: users.phone,
            user: user,
            pass: pass,
            user_money: users.money,
        };
        this.listUser.push(fullInfo);
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
}
exports.Admin = Admin;
//  create Admin
exports.admin = new Admin();
