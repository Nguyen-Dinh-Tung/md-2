"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionMain = void 0;
const Admin_1 = require("./../class/Admin");
const Constant_1 = require("../class/Constant");
const menu_1 = require("../menu/menu");
const questionAdmin_1 = require("./questionAdmin");
const questionCustomer_1 = require("./questionCustomer");
function questionMain(choice, app) {
    do {
        console.log('\n-- Ngân hàng sập đến nơi xin chào bạn --\n');
        (0, menu_1.menuMain)();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case Constant_1.CstMenuMain.OPTION_LOGIN_ADMIN:
                adminController(app, choice);
                break;
            case Constant_1.CstMenuMain.OPTION_LOGIN_CUSTOMER:
                customerController(app, choice);
                break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != Constant_1.CstMenuMain.OPTION_EXIST);
}
exports.questionMain = questionMain;
function customerController(app, choice) {
    console.log('\n-- Đăng nhập tài khoản khách hàng --\n');
    let userCustomer = app('\n-- Tên đăng nhập -- :\n');
    let passCustomer = app('\n-- Tên mật khẩu -- :\n');
    let flagCustomer = isLoginCustomer(userCustomer, passCustomer);
    if (flagCustomer == true) {
        let customer = Admin_1.admin.getCustomer(Admin_1.admin.findIdByLoginName(userCustomer));
        (0, questionCustomer_1.questionCustomer)(choice, app, customer);
    }
}
function adminController(app, choice) {
    console.log('\n-- Đăng nhập tài khoản admin --\n');
    let userAdmin = app('\n-- Tên đăng nhập -- :\n');
    let passAdmin = app('\n-- Mật khẩu -- :\n');
    let flagAdmin = isLoginAdmin(userAdmin, passAdmin);
    if (flagAdmin == true) {
        (0, questionAdmin_1.questionAdmin)(choice, app);
    }
}
function isLoginAdmin(userLogin, pass) {
    let flag = false;
    if (Admin_1.admin.loginAdmin(userLogin, pass) == true) {
        console.log('\n-- Đăng nhập thành công --\n');
        flag = true;
    }
    else {
        console.log('\n-- Đăng nhập thất bại --\n');
    }
    return flag;
}
function isLoginCustomer(userLogin, pass) {
    let flag = false;
    if (Admin_1.admin.loginCustomer(userLogin, pass) == true) {
        flag = true;
    }
    return flag;
}
