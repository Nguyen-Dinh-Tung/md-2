import { Employee } from "./employee";
import { ListEmployee } from "./listemployee";
let it = new Employee(0,'Nguyễn Đình' , 'Tùng' , '14/02/1998','Thanh Hóa' , 'Nhân viên')
let itt = new Employee(1,'Nguyễn Đình' , 'Tùng' , '14/02/1998','Thanh Hóa' , 'Nhân viên')
let app  = new ListEmployee()
app.addEmployee(it)
app.addEmployee(itt)

app.editEmployee(3,new Employee(0,'adb' , 'Tùng' , '14/02/1998','Thanh Hóa' , 'Nhân viên'))
console.log(app.renderListEmployee())
