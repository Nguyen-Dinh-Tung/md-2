"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const Admin_1 = require("./Admin");
class Login {
    constructor() {
        this.admin = 'admin';
        this.pass = 'pass';
        this.appManagerUser = Admin_1.Admin.renderListUser();
    }
    isAdmin(admin, pass) {
        let flag = false;
        if (admin == this.admin && this.pass == pass) {
            flag = true;
        }
        return flag;
    }
    isUser(user, pass) {
        let flag = false;
        this.appManagerUser.forEach((element) => {
            if (element.user == user && element.pass == pass) {
                flag = true;
                return;
            }
        });
        return flag;
    }
}
exports.Login = Login;
