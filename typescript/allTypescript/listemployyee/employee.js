"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, lastName, firstName, date, address, role) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.date = date;
        this.address = address;
        this.role = role;
    }
    Employee.prototype.getInfo = function () {
        return 'Id : ' + this.id + ' Họ : ' + this.lastName + ' Tên : ' + ' Ngày sinh : ' + this.date + 'ádd';
    };
    Employee.prototype.getId = function () {
        return this.id;
    };
    return Employee;
}());
exports.Employee = Employee;
