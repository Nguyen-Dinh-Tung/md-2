"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionAdmin = void 0;
const History_1 = require("./../handle/History");
const Constant_1 = require("./../class/Constant");
const Admin_1 = require("./../class/Admin");
const menuAdminEditUser_1 = require("./menuAdminEditUser");
const menu_1 = require("./menu");
const addHistory_1 = require("../handle/addHistory");
const regex_1 = require("../handle/regex");
function questionAdmin(choice, app, CstAdmin, menuAdminEdit) {
    do {
        console.log('\n-- Trình quản lý khách hàng --\n');
        (0, menu_1.menuAdmin)();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case CstAdmin.OPTION_RENDER_LIST_CUSTOMER:
                renderListCustomer();
                break;
            case CstAdmin.OPTION_CREATE_CUSTOMER:
                createNewCustomer(app);
                break;
            case CstAdmin.OPTION_DELETE_CUSTOMER:
                deleteCustomer(app);
                break;
            case CstAdmin.OPTION_EDIT_CUSTOMER:
                editCustomer(choice, app, menuAdminEdit);
                break;
            case CstAdmin.OPTION_UPDATE_MONEY:
                inputMoney(app);
                break;
            case CstAdmin.OPTION_GET_MONEY:
                withDrawMoneyByUser(app);
                break;
            case CstAdmin.OPTION_SORT_CUSTOMER:
                sortCustomerByAge();
                break;
            case CstAdmin.OPTION_EXIST:
                console.log('\n-- Chào tạm biệt --\n');
                break;
            case CstAdmin.OPTION_TRANSFERS_HISTORY:
                renderHistoryAdmin();
                break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != CstAdmin.OPTION_EXIST);
}
exports.questionAdmin = questionAdmin;
function renderHistoryAdmin() {
    let historyAdmin = History_1.history.getListlistHistoryAdmin();
    console.table(historyAdmin);
}
function withDrawMoneyByUser(app) {
    if (isListUserLength() == true) {
        let { flag, index } = isCustomer(app);
        let numberMoney = +app('\n-- Nhập vào số tiền  -- :\n');
        if (numberMoney > Admin_1.admin.listUser[index].money) {
            flag = false;
        }
        while (!flag) {
            console.log('\n-- Số tiền chuyển đi vướt quá hạn mức , vui lòng nhập lại số tiền muốn chuyển --\n');
            numberMoney = +app('\n-- Nhập vào số tiền muốn chuyển -- :\n');
            if (Admin_1.admin.listUser[index].money > numberMoney) {
                flag = true;
            }
        }
        if (flag) {
            Admin_1.admin.listUser[index].getMoney(numberMoney);
            (0, addHistory_1.addMessageHistoryAdmin)('admin', Admin_1.admin.listUser[index].getUser(), -numberMoney);
        }
    }
}
function editCustomer(choice, app, menuAdminEdit) {
    if (isListUserLength() == true) {
        (0, menuAdminEditUser_1.questionAdminEdit)(choice, app, Constant_1.CstAdminEdit, menuAdminEdit);
    }
}
function sortCustomerByAge() {
    if (isListUserLength() == true) {
        Admin_1.admin.listUser.sort((a, b) => {
            return a.age - b.age;
        });
    }
    else {
    }
}
function isListUserLength() {
    let flag = false;
    if (Admin_1.admin.listUser.length != 0) {
        flag = true;
    }
    else {
        console.log('\n-- Danh sách khách hàng rỗng không thể thực hiện thao tác này --\n');
    }
    return flag;
}
function inputMoney(app) {
    if (isListUserLength() == true) {
        let { flag, index } = isCustomer(app);
        let inputMoney = +app('\n-- Nhập vào số tiền  -- :\n');
        if (flag) {
            Admin_1.admin.listUser[index].setSurplus(inputMoney);
            (0, addHistory_1.addMessageHistoryAdmin)('admin', Admin_1.admin.listUser[index].getUser(), inputMoney);
        }
    }
}
function deleteCustomer(app) {
    if (isListUserLength() == true) {
        let { flag, index } = isCustomer(app);
        if (flag) {
            Admin_1.admin.deleteCustomer(index);
        }
    }
}
function isCustomer(app) {
    let index = +app('\n-- Nhập vị trí  -- :\n');
    let flag = false;
    if (Admin_1.admin.isCustomer(index) == true) {
        flag = true;
    }
    while (!flag) {
        console.log('\n-- Vui lòng nhập chính xác vị trí cần chỉnh sửa --\n');
        index = +app('\n-- Nhập vị trí cần chỉnh sửa -- :\n');
        if (Admin_1.admin.isCustomer(index) == true) {
            flag = true;
        }
    }
    return { flag, index };
}
function createNewCustomer(app) {
    console.log('\n-- Tạo mới khách hàng --\n');
    let name = app('\n-- Nhập tên khách hàng -- :\n');
    let phone = app('\n-- Nhập số điện thoại -- :\n');
    while ((0, regex_1.isPhoneNumber)(phone) == false) {
        console.log('\n-- Vui lòng nhập đúng kiểu số điện thoại --\n');
        phone = app('\n-- Nhập số điện thoại -- :\n');
    }
    let age = +app('\n-- Nhập tuổi -- :\n');
    let email = app('\n-- Nhập email -- :\n');
    while ((0, regex_1.isEmail)(email) == false) {
        console.log('\n-- Vui lòng nhập đúng kiểu email --\n');
        email = app('\n-- Nhập email -- :\n');
    }
    let idCard = app('\n-- Nhập căn cước -- :\n');
    while ((0, regex_1.isIdCard)(idCard) == false) {
        console.log('\n-- Vui lòng nhập đúng kiểu căn cước công dân --\n');
        idCard = app('\n-- Nhập căn cước -- :\n');
    }
    let user = app('\n-- Nhập tên đăng nhập tài khoản -- :\n');
    let flag = true;
    Admin_1.admin.getListUserLogin().forEach((element) => {
        if (user == element) {
            flag = false;
        }
    });
    while (!flag) {
        console.log('\n-- Tên đăng nhập trùng nhau ! Vui lòng nhập tên khác --\n');
        user = app('\n-- Nhập tên đăng nhập tài khoản -- :\n');
        flag = true;
        Admin_1.admin.getListUserLogin().forEach((element) => {
            if (user == element || (0, regex_1.isRegisterUser)(user) == false) {
                flag = false;
            }
        });
    }
    let pass = app('\n-- Nhập mật khẩu tài khoản -- :\n');
    while ((0, regex_1.isRegisterPass)(pass) == false) {
        console.log('\n-- Vui lòng nhập lại pass --\n');
        pass = app('\n-- Nhập mật khẩu tài khoản -- :\n');
    }
    Admin_1.admin.createUser(name, age, email, idCard, phone, user, pass);
    console.log('\n-- Đăng ký thành công --\n');
}
function renderListCustomer() {
    console.log('\n-- Hiển thị danh sách khách hàng --\n');
    Admin_1.admin.renderListUser();
}
