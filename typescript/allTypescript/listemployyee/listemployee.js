"use strict";
exports.__esModule = true;
exports.ListEmployee = void 0;
var ListEmployee = /** @class */ (function () {
    function ListEmployee() {
    }
    ListEmployee.prototype.renderListEmployee = function () {
        return ListEmployee.listEmployee;
    };
    ListEmployee.prototype.addEmployee = function (employee) {
        ListEmployee.listEmployee.push(employee);
    };
    ListEmployee.prototype.deleteEmployee = function (id) {
        ListEmployee.listEmployee.splice(id, 1);
    };
    ListEmployee.prototype.findId = function (id) {
        var flag = -1;
        ListEmployee.listEmployee.forEach(function (element, index) {
            if (id == element.getId()) {
                flag = index;
                return;
            }
        });
        return flag;
    };
    ListEmployee.prototype.editEmployee = function (id, employee) {
        var index = this.findId(id);
        if (index != -1) {
            ListEmployee.listEmployee[index] = employee;
        }
        else {
            console.log('Không tìm thấy nhân viên' + index);
        }
    };
    ListEmployee.listEmployee = [];
    return ListEmployee;
}());
exports.ListEmployee = ListEmployee;
