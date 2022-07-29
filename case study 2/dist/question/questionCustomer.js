"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionCustomer = void 0;
const Constant_1 = require("./../class/Constant");
const Admin_1 = require("./../class/Admin");
const Constant_2 = require("../class/Constant");
const menu_1 = require("../menu/menu");
const questionAdmin_1 = require("./questionAdmin");
const questionCustomerExtra_1 = require("./questionCustomerExtra");
function questionCustomer(choice, app, customer) {
    do {
        console.log('\n-- Ngân hàng sập đến nơi xin chào bạn --\n');
        (0, menu_1.menuUser)();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case Constant_2.CstCustomer.OPTION_RENDER_INFOR:
                renderInfoCustomer(customer);
                break;
            case Constant_2.CstCustomer.OPTION_GET_MONEY:
                drawWithCash(app, customer);
                break;
            case Constant_2.CstCustomer.OPTION_TRANSFERS:
                transfersCustomer(app, customer);
                break;
            case Constant_2.CstCustomer.OPTION_CHANGE_PASS:
                changePass(app, customer);
                break;
            case Constant_2.CstCustomer.OPTION_CACULATOR_INTERES:
                calcInterest(app, customer);
                break;
            case Constant_2.CstCustomer.OPTION_MORE_SEVIRCE:
                (0, questionCustomerExtra_1.questionCustomerExtra)(choice, app, customer);
                break;
            case Constant_2.CstCustomer.OPTION_SHOW_HISTORY:
                if (Admin_1.admin.getListHistoryCustomer(customer.getUser()) != undefined) {
                    console.table(Admin_1.admin.getListHistoryCustomer(customer.getUser()));
                }
                else {
                    console.log('\n-- Tài khoản của quý khách chưa có giao dịch--\n');
                }
                break;
            case Constant_2.CstCustomer.OPTION_EXIST:
                console.log('\n-- Chào tạm biệt --\n');
                break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != Constant_2.CstCustomer.OPTION_EXIST);
}
exports.questionCustomer = questionCustomer;
function calcInterest(app, customer) {
    let day = +app('\n-- Nhập vào số ngày lãi -- :\n');
    if (day < 120) {
        console.log('\n Tổng lãi quý khách nhận được là : "' + customer.getInterest(Constant_1.percentOneMonth, day));
    }
    else if (day > 120) {
        console.log('\n Tổng lãi quý khách nhận được là : "' + customer.getInterest(Constant_1.percentForMonth, day));
    }
    else if (day >= 365) {
        console.log('\n Tổng lãi quý khách nhận được là : "' + customer.getInterest(Constant_1.percentOneYear, day));
    }
}
function changePass(app, customer) {
    let oldPass = app('\n-- Nhập mật khẩu cũ -- :\n');
    while (oldPass != customer.getPass()) {
        console.log('\n-- Mật khẩu cũ không chính xác --\n');
        oldPass = app('\n-- Nhập mật khẩu cũ -- :\n');
    }
    let newPass = app('\n-- Nhập mật khẩu mới -- :\n');
    newPass = (0, questionAdmin_1.testResgisterPass)(newPass, app);
    let newPassMore = app('\n-- Nhập mật khẩu lại mới -- :\n');
    while (newPass != newPassMore) {
        console.log('\n-- Mật khẩu mới nhập lại không chính xác --\n');
        newPassMore = app('\n-- Nhập mật khẩu lại mới -- :\n');
    }
    customer.setPass(newPassMore);
}
function drawWithCash(app, customer) {
    let outMoney = +app('\n-- Nhập vào số tiền muốn rút -- :\n');
    if (outMoney < customer.getSurplus()) {
        customer.setDownSurplus(outMoney);
        Admin_1.admin.createNewHistory(customer.getUser(), Constant_2.CstOutMoney, outMoney);
        successHandle();
    }
    else {
        failHandle();
    }
}
function transfersCustomer(app, customer) {
    let userLoginReceiver = app('\n-- Nhập -- :\n');
    let index = Admin_1.admin.findIdByLoginName(userLoginReceiver);
    if (index != -1) {
        let receiver = Admin_1.admin.getCustomer(index);
        let money = +app('\n-- Nhập số tiền chuyển -- :\n');
        if (customer.getSurplus() > money) {
            customer.setDownSurplus(money);
            receiver.setUpSurplus(money);
            Admin_1.admin.createNewHistory(customer.getUser(), receiver.getUser(), money);
            successHandle();
        }
        else {
            failHandle();
        }
    }
    else {
        console.log('\n-- Tên tài khoản nhận tiền không tồn tại --\n');
    }
}
function renderInfoCustomer(customer) {
    let infor = Admin_1.admin.getCustomerByNameLogin(customer);
    console.table(infor);
}
function successHandle() {
    console.log('\n-- Giao dịch thành công --\n');
}
function failHandle() {
    console.log('\n-- Giao dịch không thành công --\n');
}
