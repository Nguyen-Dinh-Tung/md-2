import {Employee} from './employee'
export class ListEmployee{
  static listEmployee : Employee [] = [];
  constructor(){

  }
  renderListEmployee(){
    return ListEmployee.listEmployee
  }
  addEmployee(employee: Employee ){
    ListEmployee.listEmployee.push(employee)
  }
  deleteEmployee(id:number){
    ListEmployee.listEmployee.splice(id,1)
  }
  findId(id:number){
    let flag = -1
    ListEmployee.listEmployee.forEach((element,index) =>{
      if(id == element.getId()){
        flag =  index ;
        return ;
      }
    })
    return flag;
  }
  editEmployee(id:number , employee:Employee){
    let index = this.findId(id)
    if(index != -1){
      ListEmployee.listEmployee[index] = employee
    }else{
      console.log('Không tìm thấy nhân viên' + index)
    }
  }
}