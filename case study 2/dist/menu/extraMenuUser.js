"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionExtra = void 0;
const Admin_1 = require("./../class/Admin");
const Constant_1 = require("../class/Constant");
const menu_1 = require("./menu");
const addHistory_1 = require("../handle/addHistory");
function questionExtra(choice, app, customer) {
    do {
        console.log('\n-- Dịch vụ mở rộng --\n');
        (0, menu_1.menuCustomerExtra)();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case Constant_1.CstCustomerExtra.OPTION_INSURANCE:
                console.log('1.-- Chọn loại bảo hiểm --\n');
                (0, menu_1.insuranceMenu)();
                payInsurance(app, customer);
                break;
            // case CstCustomerExtra.OPTION_INSURANCE:
            //   console.log('3.-- Thanh toán tiền nước --\n');
            //   break ;
            // case CstCustomerExtra.OPTION_INSURANCE:
            //   console.log('4.-- Thanh toán tiền học --\n');
            //     break ;
            case Constant_1.CstCustomerExtra.OPTION_EXIST:
                console.log('\n-- Chào tạm biệt --\n');
                break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != Constant_1.CstCustomerExtra.OPTION_EXIST);
}
exports.questionExtra = questionExtra;
// function payElectric(app: any, customer: any) {
//   let selector = inputSelector(app);
//   if (selector == CstCustomerInsura.OPTION_ONE) {
//     console.log('\n-- Thanh toán tiền điện --\n');
//     let selection = app('\n-- Nhập vào yes hoặc no -- :\n');
//     switch (selection) {
//       case CstCustomerInsuraPay.OPTION_YES_INSURACE:
//         let id = findIdCustomer(customer);
//         break;
//       case CstCustomerInsuraPay.OPTION_NO_INSURACE:
//         console.log('\n-- Thanh toán thất bại  --\n');
//         break;
//     }
//   }
// }
function payInsurance(app, customer) {
    let selector = inputSelector(app);
    switch (selector) {
        case Constant_1.CstCustomerInsura.OPTION_ONE:
            optionInsuranceOne(app, customer);
            break;
        case Constant_1.CstCustomerInsura.OPTION_TWO:
            optionInsuranceTwo(app, customer);
            break;
        case Constant_1.CstCustomerInsura.OPTION_THREE:
            optionInsuranceThree(app, customer);
            break;
    }
}
function optionInsuranceThree(app, customer) {
    console.log('\n-- Bạn có chắc mua bảo hiểm y tế --\n');
    let selection = app('\n-- Nhập vào yes hoặc no -- :\n');
    switch (selection) {
        case Constant_1.CstCustomerInsuraPay.OPTION_YES_INSURACE:
            let id = findIdCustomer(customer);
            payInsuranceThree(customer, id);
            break;
        case Constant_1.CstCustomerInsuraPay.OPTION_NO_INSURACE:
            console.log('\n-- Thanh toán thất bại , quý khách vui lòng chọn dịch vụ khác --\n');
            break;
    }
}
function optionInsuranceTwo(app, customer) {
    console.log('\n-- Bạn có chắc mua bảo hiểm y tế --\n');
    let selection = app('\n-- Nhập vào yes hoặc no -- :\n');
    switch (selection) {
        case Constant_1.CstCustomerInsuraPay.OPTION_YES_INSURACE:
            let id = findIdCustomer(customer);
            payInsuranceTwo(customer, id);
            break;
        case Constant_1.CstCustomerInsuraPay.OPTION_NO_INSURACE:
            console.log('\n-- Thanh toán thất bại , quý khách vui lòng chọn dịch vụ khác --\n');
            break;
    }
}
function optionInsuranceOne(app, customer) {
    console.log('\n-- Bạn có chắc mua bảo hiểm y tế --\n');
    let selection = app('\n-- Nhập vào yes hoặc no -- :\n');
    switch (selection) {
        case Constant_1.CstCustomerInsuraPay.OPTION_YES_INSURACE:
            let id = findIdCustomer(customer);
            payInsuranceOne(customer, id, Constant_1.CstCustomerInsuraPay);
            break;
        case Constant_1.CstCustomerInsuraPay.OPTION_NO_INSURACE:
            console.log('\n-- Thanh toán thất bại , quý khách vui lòng chọn dịch vụ khác --\n');
            break;
    }
}
function findIdCustomer(customer) {
    let id = -1;
    Admin_1.admin.listUser.forEach((element, index) => {
        if (element.name == customer.name) {
            id = index;
        }
    });
    return id;
}
function payInsuranceOne(customer, id, CstCustomerInsuraPay) {
    if (customer.money < Constant_1.CstCustomerInsuraPrice.OPTION_ONE_INSURACE) {
        console.log('\n-- Số tiền trong tài khoản của quý khách không đủ để thực hiện giao dịch --\n');
    }
    else {
        Admin_1.admin.listUser[id].getMoney(Constant_1.CstCustomerInsuraPrice.OPTION_ONE_INSURACE);
        (0, addHistory_1.addMessageHistoryAdmin)(customer.getUser(), 'Mua bảo hiểm', Constant_1.CstCustomerInsuraPrice.OPTION_ONE_INSURACE);
    }
}
function payInsuranceTwo(customer, id) {
    if (customer.money < Constant_1.CstCustomerInsuraPrice.OPTION_TWO_INSURACE) {
        console.log('\n-- Số tiền trong tài khoản của quý khách không đủ để thực hiện giao dịch --\n');
    }
    else {
        Admin_1.admin.listUser[id].getMoney(Constant_1.CstCustomerInsuraPrice.OPTION_TWO_INSURACE);
        (0, addHistory_1.addMessageHistoryAdmin)(customer.getUser(), 'Mua bảo hiểm', Constant_1.CstCustomerInsuraPrice.OPTION_TWO_INSURACE);
    }
}
function payInsuranceThree(customer, id) {
    if (customer.money < Constant_1.CstCustomerInsuraPrice.OPTION_THREE_INSURACE) {
        console.log('\n-- Số tiền trong tài khoản của quý khách không đủ để thực hiện giao dịch --\n');
    }
    else {
        Admin_1.admin.listUser[id].getMoney(Constant_1.CstCustomerInsuraPrice.OPTION_THREE_INSURACE);
        (0, addHistory_1.addMessageHistoryAdmin)(customer.getUser(), 'Mua bảo hiểm', Constant_1.CstCustomerInsuraPrice.OPTION_THREE_INSURACE);
    }
}
function inputSelector(app) {
    let selector = +app('\n-- Nhập lựa chọn của bạn -- :\n');
    let flag = false;
    if (selector >= Constant_1.CstCustomerInsura.OPTION_ONE && selector <= Constant_1.CstCustomerInsura.OPTION_THREE) {
        flag = true;
    }
    while (!flag) {
        console.log('\n-- Vui lòng nhập lại lựa chọn --\n');
        selector = +app('\n-- Nhập lựa chọn của bạn -- :\n');
        if (selector >= Constant_1.CstCustomerInsura.OPTION_ONE && selector <= Constant_1.CstCustomerInsura.OPTION_THREE) {
            flag = true;
        }
    }
    return selector;
}
