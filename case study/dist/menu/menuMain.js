"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionMain = void 0;
const Constant_1 = require("./../class/Constant");
const Login_1 = require("./../class/Login");
const Admin_1 = require("./../class/Admin");
const Constant_2 = require("../class/Constant");
const menu_1 = require("./menu");
const menuAdmin_1 = require("./menuAdmin");
const menuUser_1 = require("./menuUser");
function questionMain(choice, menu, app, CstMenuMain) {
    do {
        console.log('\n-- Ngân hàng sấp tới nơi chào bạn --\n');
        menu();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case CstMenuMain.OPTION_LOGIN_ADMIN:
                adminControler(app, choice);
                break;
            case CstMenuMain.OPTION_LOGIN_CUSTOMER:
                customerControler(app, choice);
                break;
            case CstMenuMain.OPTION_EXIST:
                console.log('\n-- Chào tạm biệt --\n');
                break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != CstMenuMain.OPTION_EXIST);
}
exports.questionMain = questionMain;
function customerControler(app, choice) {
    console.log('\n-- Đăng nhập tài khoản cá nhân --\n');
    let user = app('\n-- Nhập tên đăng nhập -- :\n');
    let pass = app('\n-- Nhập tên đăng nhập pass -- :\n');
    let flag = isLoginCuster(user, pass);
    let index = -1;
    let customer;
    ({ customer, index } = getInfoCustomer(user, pass, index));
    if (flag) {
        (0, menuUser_1.questionCustomer)(choice, app, Constant_1.CstCustomer, customer);
    }
}
function getInfoCustomer(user, pass, index) {
    Admin_1.admin.listUser.forEach((element, id) => {
        if (element.user == user && element.pass == pass) {
            return index = id;
        }
    });
    let customer = Admin_1.admin.listUser[index];
    return { customer, index };
}
function adminControler(app, choice) {
    console.log('\n-- Đăng nhập admin --\n');
    let admin = app('\n-- Nhập tên đăng nhập admin -- :\n');
    let pass = app('\n-- Nhập tên đăng nhập pass -- :\n');
    let flag = isloginAdmin(admin, pass);
    if (flag) {
        (0, menuAdmin_1.questionAdmin)(choice, app, Constant_2.CstAdmin, menu_1.menuAdmin);
    }
}
function isloginAdmin(admin, pass) {
    let flag = true;
    if (Login_1.login.isAdmin(admin, pass) == false) {
        console.log('\n-- Tài khoản không chính xác vui lòng thao tác lại --\n');
        flag = false;
    }
    return flag;
}
function isLoginCuster(user, pass) {
    let flag = true;
    if (Login_1.login.isUserCustomer(user, pass) == false) {
        console.log('\n-- Tài khoản không chính xác vui lòng thao tác lại --\n');
        flag = false;
    }
    return flag;
}
