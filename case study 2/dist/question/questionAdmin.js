"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failHandle = exports.successHandle = exports.testPhoneCustomer = exports.testAgeCustomer = exports.testEmailCustomer = exports.testIdCard = exports.testResgisterName = exports.testResgisterPass = exports.questionAdmin = void 0;
const Admin_1 = require("./../class/Admin");
const Constant_1 = require("../class/Constant");
const menu_1 = require("../menu/menu");
const regex_1 = require("../extra/regex");
const questionAdminExtra_1 = require("./questionAdminExtra");
function questionAdmin(choice, app) {
    do {
        console.log('\n-- Quản lý khách hàng --\n');
        (0, menu_1.menuAdmin)();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case Constant_1.CstAdmin.OPTION_CREATE_CUSTOMER:
                createNewCustomer(app);
                break;
            case Constant_1.CstAdmin.OPTION_RENDER_LIST_CUSTOMER:
                renderListCustomer();
                break;
            case Constant_1.CstAdmin.OPTION_DELETE_CUSTOMER:
                deleteCustomer(app);
                break;
            case Constant_1.CstAdmin.OPTION_EDIT_CUSTOMER:
                (0, questionAdminExtra_1.questionAdminExtra)(choice, app);
                break;
            case Constant_1.CstAdmin.OPTION_UPDATE_SURPLUS:
                updateMoneyCustomer(app);
                break;
            case Constant_1.CstAdmin.OPTION_WITH_DRAW:
                withDrawMoneyCustomer(app);
                break;
            case Constant_1.CstAdmin.OPTION_FIND_CUSTOMER:
                findCustomer(app);
                break;
            case Constant_1.CstAdmin.OPTION_SORT_CUSTOMER:
                if (Admin_1.admin.isUserOfListUser() == true) {
                    Admin_1.admin.sortListCustomerByAge();
                }
                break;
            case Constant_1.CstAdmin.OPTION_RENDER_HISTORY:
                console.table(Admin_1.admin.getListHistory());
            // case  CstAdmin :
            //   break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != Constant_1.CstAdmin.OPTION_EXIST);
}
exports.questionAdmin = questionAdmin;
function findCustomer(app) {
    console.log('\n-- Điền tên đăng nhập cần tìm --\n');
    let listRender = [];
    if (Admin_1.admin.isUserOfListUser() == true) {
        let userCustomer = app('\n-- Tên đăng nhập -- :\n');
        let index = Admin_1.admin.findIdByLoginName(userCustomer);
        if (index != -1) {
            listRender.push(Admin_1.admin.getCustomer(index));
        }
    }
    console.table(listRender);
}
function withDrawMoneyCustomer(app) {
    console.log('\n-- Rút tiền --\n');
    if (Admin_1.admin.isUserOfListUser() == true) {
        let userCustomer = app('\n-- Điền tên đăng nhập nhập tiền -- :\n');
        let index = Admin_1.admin.findIdByLoginName(userCustomer);
        if (index != -1) {
            let money = +app('\n-- Nhập số tiền muốn rút -- :\n');
            if (Admin_1.admin.getCustomer(index).getSurplus() >= money) {
                Admin_1.admin.getCustomer(index).setDownSurplus(money);
                Admin_1.admin.createNewHistory('admin', Admin_1.admin.getCustomer(index).getUser(), money);
            }
            else {
                failHandle();
            }
        }
    }
}
function updateMoneyCustomer(app) {
    if (Admin_1.admin.isUserOfListUser() == true) {
        let userCustomer = app('\n-- Điền tên đăng nhập nhập tiền -- :\n');
        let index = Admin_1.admin.findIdByLoginName(userCustomer);
        if (index != -1) {
            let inputMoney = +app('\n-- Nhập số tiền nạp -- :\n');
            Admin_1.admin.getCustomer(index).setUpSurplus(inputMoney);
            Admin_1.admin.createNewHistory('admin', Admin_1.admin.getCustomer(index).getUser(), inputMoney);
            successHandle();
        }
        else {
            errorUserCustomer();
        }
    }
}
function deleteCustomer(app) {
    if (Admin_1.admin.isUserOfListUser() == true) {
        let userCustomer = app('\n-- Nhập tên tài khoản cần xóa -- :\n');
        Admin_1.admin.deleteCustomer(userCustomer);
    }
}
function renderListCustomer() {
    if (Admin_1.admin.isUserOfListUser() == true) {
        Admin_1.admin.renderListUser();
    }
}
function createNewCustomer(app) {
    let nameCustomer = app('\n-- Nhập tên khách hàng -- :\n');
    let phone = app('\n-- Nhập Số điện thoại khách hàng -- :\n');
    phone = testPhoneCustomer(phone, app);
    let age = +app('\n-- Nhập tuổi khách hàng -- :\n');
    age = testAgeCustomer(age, app);
    let email = app('\n-- Nhập Email khách hàng -- :\n');
    email = testEmailCustomer(email, app);
    let idCard = app('\n-- Nhập căn cước công dân của khách hàng -- :\n');
    idCard = testIdCard(idCard, app);
    let user = app('\n-- Tên đăng nhập -- :\n');
    user = testResgisterName(user, app);
    let pass = app('\n-- Nhập mật khẩu -- :\n');
    pass = testResgisterPass(pass, app);
    Admin_1.admin.createUser(nameCustomer, phone, age, email, idCard, user, pass);
}
function testResgisterPass(pass, app) {
    while ((0, regex_1.isRegisterPass)(pass) == false) {
        console.log('\n-- Mật khẩu bao gồm 8 kí tự chữ và số --\n');
        pass = app('\n-- Nhập mật khẩu -- :\n');
    }
    return pass;
}
exports.testResgisterPass = testResgisterPass;
function testResgisterName(user, app) {
    while ((0, regex_1.isRegisterUser)(user) == false) {
        console.log('\n-- Tên đăng nhập gồm 8 kí tự chữ hoặc số --\n');
        user = app('\n-- Tên đăng nhập -- :\n');
    }
    while (Admin_1.admin.isUserCustomerExist(user) == false) {
        console.log('\n-- Tên đăng nhập gồm 8 kí tự chữ số --\n');
        user = app('\n-- Tên đăng nhập -- :\n');
    }
    return user;
}
exports.testResgisterName = testResgisterName;
function testIdCard(idCard, app) {
    while ((0, regex_1.isIdCard)(idCard) == false) {
        console.log('\n-- Định dạng căn cước không đúng --\n');
        idCard = app('\n-- Nhập căn cước công dân của khách hàng -- :\n');
    }
    return idCard;
}
exports.testIdCard = testIdCard;
function testEmailCustomer(email, app) {
    while ((0, regex_1.isEmail)(email) == false) {
        console.log('\n-- Định dạng email không đúng --\n');
        email = app('\n-- Nhập Email khách hàng -- :\n');
    }
    return email;
}
exports.testEmailCustomer = testEmailCustomer;
function testAgeCustomer(age, app) {
    while ((0, regex_1.isAge)(age) == false) {
        console.log('\n-- Tuổi khách hàng phải từ 1 - 120 --\n');
        age = +app('\n-- Nhập tuổi khách hàng -- :\n');
    }
    return age;
}
exports.testAgeCustomer = testAgeCustomer;
function testPhoneCustomer(phone, app) {
    while ((0, regex_1.isPhoneNumber)(phone) == false) {
        console.log('\n-- Số điện thoại không đúng định dạng --\n');
        phone = app('\n-- Nhập Số điện thoại khách hàng -- :\n');
    }
    return phone;
}
exports.testPhoneCustomer = testPhoneCustomer;
function successHandle() {
    console.log('\n-- Giao dịch thành công --\n');
}
exports.successHandle = successHandle;
function failHandle() {
    console.log('\n-- Giao dịch không thành công --\n');
}
exports.failHandle = failHandle;
function errorUserCustomer() {
    console.log('Tên đăng nhập không tồn tại');
}
