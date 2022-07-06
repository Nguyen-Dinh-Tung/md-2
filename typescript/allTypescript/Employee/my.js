"use strict";
exports.__esModule = true;
exports.Gender = exports.Employee = void 0;
// class
var Employee = /** @class */ (function () {
    function Employee(id, name, gender, date, email, phone) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.date = date;
        this.email = email;
        this.phone = phone;
    }
    return Employee;
}());
exports.Employee = Employee;
// enum
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
