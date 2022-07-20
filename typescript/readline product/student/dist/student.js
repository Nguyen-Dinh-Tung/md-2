"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, age, date, email, group) {
        this._name = name;
        this._age = age;
        this._date = date;
        this._email = email;
        this._group = group;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get group() {
        return this._group;
    }
    set group(value) {
        this._group = value;
    }
}
exports.Student = Student;
