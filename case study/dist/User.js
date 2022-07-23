"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(_name, _age, _email, _group, _phone) {
        this._name = _name;
        this._age = _age;
        this._email = _email;
        this._group = _group;
        this.user_money = 0;
        this._phone = _phone;
    }
    get user() {
        return this._user;
    }
    set user(_user) {
        this._user = _user;
    }
    get pass() {
        return this._pass;
    }
    set pass(_pass) {
        this._pass = _pass;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get phone() {
        return this._phone;
    }
    set phone(_phone) {
        this.phone = _phone;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get group() {
        return this._group;
    }
    set group(group) {
        this._group = group;
    }
    set money(moneyInput) {
        this.user_money = this.user_money + moneyInput;
    }
    getMoney(money) {
        this.user_money = this.user_money - money;
        console.log(`\nRút tiền thành công! Số dư tài khoản : ${this.user_money}\n`);
    }
}
exports.User = User;
