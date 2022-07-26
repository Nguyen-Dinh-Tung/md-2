"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Constant_1 = require("./Constant");
class User {
    constructor(_name, _age, _email, idCard, _phone) {
        this._name = _name;
        this._age = _age;
        this._email = _email;
        this._idCard = idCard;
        this._phone = _phone;
        this._money = 0;
    }
    get user() {
        return this._user;
    }
    getUser() {
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
        this._phone = _phone;
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
    get idCard() {
        return this._idCard;
    }
    set idCard(idCard) {
        this._idCard = idCard;
    }
    set money(moneyInput) {
        this._money = this._money + moneyInput;
    }
    get money() {
        return this._money;
    }
    setSurplus(moneyInput) {
        this._money = this._money + moneyInput;
    }
    getMoney(money) {
        this._money = this._money - money;
    }
    getMoneyToTransfer(money) {
        this._money = this._money - money;
        return money;
    }
    calcInterest(tSDay) {
        let total = this._money * Constant_1.interest * tSDay;
        return total;
    }
}
exports.User = User;
