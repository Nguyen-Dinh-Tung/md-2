"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionAdminExtra = void 0;
const Admin_1 = require("./../class/Admin");
const Constant_1 = require("../class/Constant");
const menu_1 = require("../menu/menu");
const questionAdmin_1 = require("./questionAdmin");
function questionAdminExtra(choice, app) {
    let nameCustomer = app('\n-- Nhập tên đăng nhập cần chỉnh sửa -- :\n');
    let index = Admin_1.admin.findIdByLoginName(nameCustomer);
    let manager = Admin_1.admin.getListUser();
    if (index != -1) {
        let customer = manager[index];
        do {
            console.log('\n-- Chỉnh sửa thông tin khách hàng --\n');
            (0, menu_1.menuAdminExtra)();
            choice = +app('\nNhập lựa chọn của bạn : ');
            switch (choice) {
                case Constant_1.CstAdminExtra.OPTION_EDIT_NAME:
                    editNameCustomer(app, customer);
                    break;
                case Constant_1.CstAdminExtra.OPTION_EDIT_PHONE:
                    editPhoneCustomer(app, customer);
                    break;
                case Constant_1.CstAdminExtra.OPTION_EDIT_AGE:
                    editAgeCustomer(app, customer);
                    break;
                case Constant_1.CstAdminExtra.OPTION_EDIT_EMAIL:
                    editEmailCustomer(app, customer);
                    break;
                case Constant_1.CstAdminExtra.OPTION_EDIT_IDCARD:
                    editIdCardCustomer(app, customer);
                    break;
                case Constant_1.CstAdminExtra.OPTION_EDIT_PASS:
                    editPassCustomer(app, customer);
                    break;
                case Constant_1.CstAdminExtra.OPTION_EXIST:
                    console.log('\n-- Chào tạm biệt --\n');
                    break;
                default:
                    console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                    break;
            }
        } while (choice != Constant_1.CstAdminExtra.OPTION_EXIST);
    }
}
exports.questionAdminExtra = questionAdminExtra;
function editPassCustomer(app, customer) {
    let pass = app('\n-- Nhập căn cước mới -- :\n');
    customer.setPass((0, questionAdmin_1.testResgisterPass)(pass, app));
    notifySuccess();
}
function editIdCardCustomer(app, customer) {
    let idCard = app('\n-- Nhập căn cước mới -- :\n');
    customer.setIdCard((0, questionAdmin_1.testIdCard)(idCard, app));
    notifySuccess();
}
function editEmailCustomer(app, customer) {
    let newEmail = app('\n-- Nhập email mới -- :\n');
    customer.setEmail((0, questionAdmin_1.testEmailCustomer)(newEmail, app));
    notifySuccess();
}
function editAgeCustomer(app, customer) {
    let newAge = app('\n-- Nhập tuổi mới -- :\n');
    customer.setAge((0, questionAdmin_1.testAgeCustomer)(newAge, app));
    notifySuccess();
}
function editPhoneCustomer(app, customer) {
    let newPhone = app('\n-- Nhập số điện thoại -- :\n');
    customer.setPhone((0, questionAdmin_1.testPhoneCustomer)(newPhone, app));
    notifySuccess();
}
function editNameCustomer(app, customer) {
    let newName = app('\n-- Nhập tên mới -- :\n');
    customer.setName(newName);
    notifySuccess();
}
function notifySuccess() {
    console.log('\n-- Chỉnh sửa thành công --\n');
}
