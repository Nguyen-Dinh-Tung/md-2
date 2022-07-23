"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.Login = void 0;
const Admin_1 = require("./Admin");
// test acount
// let user = new User('Tùng',24,'s30.tung@gmail.com','222','0337118801')
// admin.listUser.unshift(user)
// admin.listUser.forEach((element) =>{
//   element.user = 'takpaj'
//   element.pass = 'test'
// })
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
