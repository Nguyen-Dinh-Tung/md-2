"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionCustomer = void 0;
const addHistory_1 = require("../handle/addHistory");
const History_1 = require("../handle/History");
const Admin_1 = require("./../class/Admin");
const menu_1 = require("./menu");
function questionCustomer(choice, app, CstCustomer, customer) {
    do {
        console.log('\n-- Xin chào --\n');
        (0, menu_1.menuCustomer)();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case CstCustomer.OPTION_RENDER_INFO_CUSTOMER:
                showInfoCustomer(customer);
                break;
            case CstCustomer.OPTION_GET_MONEY:
                getMoney(app, customer);
                break;
            case CstCustomer.OPTION_EDIT_PASS:
                changePass(app, customer);
                break;
            case CstCustomer.OPTION_CALC_INTEREST:
                calcInterest(app, customer);
                break;
            case CstCustomer.OPTION_TRANSFERS:
                transfersMoney(app, customer);
                break;
            case CstCustomer.OPTION_TRANSFERS_HISTORY:
                renderHistoryStranfers(customer);
                break;
            case CstCustomer.OPTION_EXIST:
                console.log('\n-- Chào tạm biệt --\n');
                break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != CstCustomer.OPTION_EXIST);
}
exports.questionCustomer = questionCustomer;
function renderHistoryStranfers(customer) {
    let historyCustimer = History_1.history.getListHistoryCustomer(customer.name);
    console.table(historyCustimer);
}
function transfersMoney(app, customer) {
    console.log('\n-- Chuyển tiền --\n');
    let nameLogin = app('\n-- Nhập tên đăng nhập người nhận tiền  -- :\n');
    let flag = false;
    let id = -1;
    ({ flag, id } = findNameLogin(nameLogin, flag, id));
    while (!flag) {
        console.log('\n-- Tên đăng nhập người nhận không chính xác --\n');
        nameLogin = app('\n-- Nhập tên đăng nhập người nhận tiền  -- :\n');
        ({ flag, id } = findNameLogin(nameLogin, flag, id));
    }
    let moneyTransferred = +app('\n-- Nhập vào số tiền muốn chuyển -- :\n');
    if (moneyTransferred > customer.money) {
        flag = false;
    }
    while (!flag) {
        console.log('\n-- Số tiền chuyển đi vướt quá hạn mức , vui lòng nhập lại số tiền muốn chuyển --\n');
        moneyTransferred = +app('\n-- Nhập vào số tiền muốn chuyển -- :\n');
        if (customer.money > moneyTransferred) {
            flag = true;
        }
    }
    let sentMoney = customer.getMoneyToTransfer(moneyTransferred);
    (0, addHistory_1.addMessageHistory)(customer, nameLogin, moneyTransferred);
    // addMessageHistoryAdmin(history,admin, customer, nameLogin, moneyTransferred);
    // admin.listUser[id].setSurplus(sentMoney);
}
function findNameLogin(nameLogin, flag, id) {
    Admin_1.admin.listUser.forEach((element, index) => {
        if (element.user == nameLogin) {
            flag = true;
            id = index;
        }
    });
    return { flag, id };
}
function calcInterest(app, customer) {
    let tSDay = app('\n-- Nhập vào tổng ngày gửi tiền -- :\n');
    console.log('Tổng lãi quý khách nhận được là : ' + customer.calcInterest(tSDay));
    (0, addHistory_1.addMessageHistory)(customer, 'Tính lãi', customer.calcInterest(tSDay));
}
function changePass(app, customer) {
    let oldPass = app('\n-- Nhập vào mật khẩu cũ -- :\n');
    let flag = true;
    if (oldPass != customer.pass) {
        flag = false;
    }
    ({ flag, oldPass } = isPass(flag, oldPass, app, customer));
    let newPass = app('\n-- Nhập vào mật khẩu mới -- :\n');
    let newPassMore = app('\n-- Nhập vào mật khẩu mới -- :\n');
    if (newPass != newPassMore) {
        flag = false;
    }
    ({ flag, newPassMore } = isNewPassMore(flag, newPassMore, app, newPass));
    customer.pass = newPass;
}
function isPass(flag, oldPass, app, customer) {
    while (!flag) {
        console.log('\n-- Mật khẩu không chính xác --\n');
        oldPass = app('\n-- Nhập vào mật khẩu cũ -- :\n');
        if (oldPass == customer.pass) {
            flag = true;
        }
    }
    return { flag, oldPass };
}
function isNewPassMore(flag, newPassMore, app, newPass) {
    while (!flag) {
        console.log('\n-- Mật khẩu không chính xác --\n');
        newPassMore = app('\n-- Nhập lại mật khẩu mới -- :\n');
        if (newPass == newPassMore) {
            flag = true;
        }
    }
    return { flag, newPassMore };
}
function getMoney(app, customer) {
    let money = +app('\n-- Nhập vào số tiền muốn rút -- :\n');
    let input = 'Rút tiền mặt';
    if (customer.money < money) {
        console.log('\n-- Số tiền vứt quá hạn mức tín dụng , vui lòng thao tác lại --\n');
    }
    else {
        customer.getMoney(money);
        console.log('\n-- Rút tiền thành công --\n');
    }
    (0, addHistory_1.addMessageHistory)(customer, input, -money);
}
function showInfoCustomer(customer) {
    let infoCustomer = {
        name: customer.name,
        age: customer.age,
        phone: customer.phone,
        email: customer.email,
        surplus: customer.money,
    };
    let showInfo = [];
    showInfo.push(infoCustomer);
    console.table(showInfo);
}
