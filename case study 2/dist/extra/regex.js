"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAge = exports.isRegisterUser = exports.isRegisterPass = exports.isIdCard = exports.isPhoneNumber = exports.isEmail = void 0;
function isEmail(emailInput) {
    let email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let flag = false;
    if (email.test(emailInput) == true) {
        flag = true;
    }
    return flag;
}
exports.isEmail = isEmail;
function isPhoneNumber(numberInput) {
    let number = /((09|03|07|08|05)+([0-9]{8})\b)/;
    let flag = false;
    if (number.test(numberInput) == true) {
        flag = true;
    }
    return flag;
}
exports.isPhoneNumber = isPhoneNumber;
function isIdCard(idCardInput) {
    let email = /(([0-9]{12})\b)/;
    let flag = false;
    if (email.test(idCardInput) == true) {
        flag = true;
    }
    return flag;
}
exports.isIdCard = isIdCard;
function isRegisterPass(value) {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let flag = false;
    if (regex.test(value) == true) {
        flag = true;
    }
    return flag;
}
exports.isRegisterPass = isRegisterPass;
function isRegisterUser(value) {
    let regex = /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{7,19}$/;
    let flag = false;
    if (regex.test(value) == true) {
        flag = true;
    }
    return flag;
}
exports.isRegisterUser = isRegisterUser;
function isAge(age) {
    let flag = true;
    if (age <= 0 || age > 120) {
        flag = false;
    }
    return flag;
}
exports.isAge = isAge;
