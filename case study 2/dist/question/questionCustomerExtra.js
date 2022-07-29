"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionCustomerExtra = void 0;
const Admin_1 = require("../class/Admin");
const Constant_1 = require("../class/Constant");
const menu_1 = require("../menu/menu");
const questionAdmin_1 = require("./questionAdmin");
function questionCustomerExtra(choice, app, customer) {
    console.log('\n-- Dịch vụ mua bảo hiểm --\n');
    do {
        (0, menu_1.menuUserExtra)();
        choice = +app('\n-- Nhập lựa chọn của bạn -- :\n');
        switch (choice) {
            case Constant_1.CustomerInsuraPay.OPTION_ONE:
                insuranceOne(customer);
                break;
            case Constant_1.CustomerInsuraPay.OPTION_TWO:
                insuranceTwo(customer);
                break;
            case Constant_1.CustomerInsuraPay.OPTION_THREE:
                insuranceThree(customer);
                break;
            case Constant_1.CustomerInsuraPay.OPTION_EXIST:
                console.log('\n-- Cảm ơn quý khách đã sử dụng dịch vụ --\n');
                break;
        }
    } while (choice != Constant_1.CustomerInsuraPay.OPTION_EXIST);
}
exports.questionCustomerExtra = questionCustomerExtra;
function insuranceThree(customer) {
    if (customer.getSurplus() > Constant_1.CustomerInsuraPrice.OPTION_PAY_THREE) {
        customer.setDownSurplus(Constant_1.CustomerInsuraPrice.OPTION_PAY_THREE);
        Admin_1.admin.createNewHistory(customer.getUser(), Constant_1.insuraOne, Constant_1.CustomerInsuraPrice.OPTION_PAY_THREE);
        (0, questionAdmin_1.successHandle)();
    }
    else {
        (0, questionAdmin_1.failHandle)();
    }
}
function insuranceTwo(customer) {
    if (customer.getSurplus() > Constant_1.CustomerInsuraPrice.OPTION_PAY_TWO) {
        customer.setDownSurplus(Constant_1.CustomerInsuraPrice.OPTION_PAY_TWO);
        Admin_1.admin.createNewHistory(customer.getUser(), Constant_1.insuraOne, Constant_1.CustomerInsuraPrice.OPTION_PAY_TWO);
        (0, questionAdmin_1.successHandle)();
    }
    else {
        (0, questionAdmin_1.failHandle)();
    }
}
function insuranceOne(customer) {
    if (customer.getSurplus() > Constant_1.CustomerInsuraPrice.OPTION_PAY_ONE) {
        customer.setDownSurplus(Constant_1.CustomerInsuraPrice.OPTION_PAY_ONE);
        Admin_1.admin.createNewHistory(customer.getUser(), Constant_1.insuraOne, Constant_1.CustomerInsuraPrice.OPTION_PAY_ONE);
        (0, questionAdmin_1.successHandle)();
    }
    else {
        (0, questionAdmin_1.failHandle)();
    }
}
