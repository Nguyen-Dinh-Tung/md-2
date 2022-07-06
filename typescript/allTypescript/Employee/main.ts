// module
import {Employee , Gender} from './my'
// add Employee
let It = new Employee(0,'Tung',Gender.Male,'14/02/1998','S30.tung@gmail.com' , '0977719684')
let Itt = new Employee(1,'Tung',Gender.Male,'14/02/1998','S30.tung@gmail.com' , '0977719684')
let pr = new Employee(2,'Tung',Gender.Male,'14/02/1998','S30.tung@gmail.com' , '0977719684')
// listEmployee
let listEmployee: Employee [] = []
listEmployee.push(It);
listEmployee.push(Itt);
// handle render , add , delete
function render(employee){
  console.log(employee)
}
function addEmployee(employee:Employee , listEmployee){
  listEmployee.push(employee)
}
function deleteEmployee(id:number , listEmployee){
  listEmployee.splice(id,1)
}
addEmployee(pr,listEmployee)
console.log(listEmployee)