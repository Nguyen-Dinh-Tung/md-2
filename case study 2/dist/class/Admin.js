"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = exports.Admin = void 0;
const History_1 = require("./History");
const User_1 = require("./User");
class Admin {
    constructor() {
        this.listUser = [];
        this.history = [];
        this.user = 'admin';
        this.pass = '123123';
    }
    renderListUser() {
        console.table(this.listUser);
    }
    getListUser() {
        return this.listUser;
    }
    isUserOfListUser() {
        if (this.listUser.length == 0) {
            console.log('\n-- Danh sách khách hàng rỗng --\n');
            return false;
        }
        return true;
    }
    createUser(_name, _phone, _age, _email, idCard, user, pass) {
        let customer = new User_1.User(_name, _phone, _age, _email, idCard);
        customer.setUser(user);
        customer.setPass(pass);
        this.listUser.push(customer);
    }
    deleteCustomer(nameLogin) {
        let index = this.findIdByLoginName(nameLogin);
        if (index != -1) {
            this.listUser.splice(index, 1);
        }
    }
    findIdByLoginName(nameLogin) {
        let flag = -1;
        this.listUser.forEach((element, index) => {
            if (element.getUser() == nameLogin) {
                flag = index;
            }
        });
        return flag;
    }
    sortListCustomerByAge() {
        this.listUser.sort((a, b) => {
            return a.getAge() - b.getAge();
        });
    }
    loginAdmin(user, pass) {
        let flag = false;
        if (user == this.user && pass == this.pass) {
            flag = true;
        }
        return flag;
    }
    loginCustomer(user, pass) {
        let flag = false;
        this.listUser.forEach((element) => {
            if (element.getUser() == user && element.getPass() == pass) {
                flag = true;
            }
        });
        return flag;
    }
    isUserCustomerExist(user) {
        let flag = true;
        this.listUser.forEach((element) => {
            if (element.getUser() == user) {
                console.log('\n-- Tên đăng nhập đã tồn tại --\n');
                return false;
            }
        });
        return flag;
    }
    getCustomer(index) {
        return this.listUser[index];
    }
    getCustomerByNameLogin(customer) {
        let showInfo = [];
        let infoNeedShow = {
            name: customer.getName(),
            phone: customer.getPhone(),
            age: customer.getAge(),
            email: customer.getEmail(),
            surplus: customer.getSurplus(),
        };
        showInfo.push(infoNeedShow);
        return showInfo;
    }
    getListHistory() {
        return this.history;
    }
    getListHistoryCustomer(nameLogin) {
        let listHistory = [];
        this.history.forEach(element => {
            if (element.getSender() == nameLogin || element.getReceiver() == nameLogin) {
                listHistory.push(element);
            }
        });
        return listHistory;
    }
    createNewHistory(sender, receiver, amountOfMoney) {
        let newHistory = new History_1.History(sender, receiver, amountOfMoney);
        this.history.push(newHistory);
    }
}
exports.Admin = Admin;
//  create Admin
exports.admin = new Admin();
exports.admin.createUser('Tùng', '0337118801', 24, 's30.tung@gmail.com', '123123321321', 'takpaj', '123');
exports.admin.createUser('linh', '0337118801', 15, 's30.tung@gmail.com', '123123321321', 'linh', '123');
exports.admin.createUser('phoanh', '0337118801', 28, 's30.tung@gmail.com', '123123321321', 'phoanh', '123');
exports.admin.getCustomer(0).setUpSurplus(10000000);
exports.admin.getCustomer(1).setUpSurplus(10000000);
exports.admin.getCustomer(2).setUpSurplus(10000000);
