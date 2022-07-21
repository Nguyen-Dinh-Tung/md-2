"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
let regexpEmail = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$");
function isEmail(email) {
    return regexpEmail.test(email);
}
exports.isEmail = isEmail;
