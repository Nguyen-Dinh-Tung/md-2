"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(_name, _phone, _age, _email, idCard) {
        this._name = _name;
        this._phone = _phone;
        this._age = _age;
        this._email = _email;
        this._idCard = idCard;
        this._surplus = 0;
    }
    getInfo() {
        let customer = {
            name: this._name,
            phone: this._phone,
            age: this._age,
            email: this._email,
            idCard: this._idCard,
            surplus: this._surplus,
        };
        let infoRender = [];
        infoRender.push(customer);
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    getPhone() {
        return this._phone;
    }
    setPhone(phone) {
        this._phone = phone;
    }
    getAge() {
        return this._age;
    }
    setAge(age) {
        this._age = age;
    }
    getEmail() {
        return this._email;
    }
    setEmail(email) {
        this._email = email;
    }
    getIdCard() {
        return this._idCard;
    }
    setIdCard(idCard) {
        this._idCard = idCard;
    }
    getSurplus() {
        return this._surplus;
    }
    setUpSurplus(surplus) {
        this._surplus = this._surplus + surplus;
    }
    setDownSurplus(surplus) {
        this._surplus = this._surplus - surplus;
    }
    setUser(newUser) {
        this._user = newUser;
    }
    getUser() {
        return this._user;
    }
    setPass(newPass) {
        this._pass = newPass;
    }
    getPass() {
        return this._pass;
    }
    getInterest(percent, day) {
        let totalInterest = this._surplus * percent * day;
        return totalInterest;
    }
}
exports.User = User;
