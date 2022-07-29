"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.Login = void 0;
const User_1 = require("./User");
const Admin_1 = require("./Admin");
// test acount
let user = new User_1.User('Tùng', 24, 's30.tung@gmail.com', '222', '0337118801');
let user2 = new User_1.User('linh', 24, 's30.tung@gmail.com', '222', '0337118801');
Admin_1.admin.listUser.unshift(user);
user.user = 'takpaj';
user.pass = 'test';
user.setSurplus(5000000);
Admin_1.admin.listUser.push(user2);
user2.user = 'linh';
user2.pass = 'test';
user2.setSurplus(5000000);
//
class Login {
    constructor() {
        this.managerLoginUser = [];
    }
    isAdmin(user, pass) {
        let flag = false;
        if (Admin_1.admin.getAminUsers() == user && Admin_1.admin.getAminPass() == pass) {
            flag = true;
        }
        return flag;
    }
    isUserCustomer(user, pass) {
        let flag = false;
        Admin_1.admin.listUser.forEach((element) => {
            if (element.user == user && element.pass == pass) {
                flag = true;
            }
        });
        return flag;
    }
}
exports.Login = Login;
exports.login = new Login();
