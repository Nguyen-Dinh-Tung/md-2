"use strict";
exports.__esModule = true;
// module
var my_1 = require("./my");
// add Employee
var It = new my_1.Employee(0, 'Tung', my_1.Gender.Male, '14/02/1998', 'S30.tung@gmail.com', '0977719684');
var Itt = new my_1.Employee(1, 'Tung', my_1.Gender.Male, '14/02/1998', 'S30.tung@gmail.com', '0977719684');
var pr = new my_1.Employee(1, 'Tung', my_1.Gender.Male, '14/02/1998', 'S30.tung@gmail.com', '0977719684');
// listEmployee
var listEmployee = [];
listEmployee.push(It);
listEmployee.push(Itt);
// handle render , add , delete
function render(employee) {
    console.log(employee);
}
listEmployee.forEach(render);
function addEmployee(employee, listEmployee) {
    listEmployee.push(employee);
}
function deleteEmployee(id, listEmployee) {
    listEmployee.splice(id, 1);
}
addEmployee(pr, listEmployee);
console.log(listEmployee);
