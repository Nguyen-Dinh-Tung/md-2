import { Student } from "./student";
export class StudentManager {
  private listStudent: any [] = [] ;

  constructor(){}

  showListStudent() : any{
    console.table(this.listStudent)
    return ;
  }

  addStudent(Student : Student): void{
    this.listStudent.push(Student)
  }

  findStudentByName(name : string): any{
    let Student ;
    this.listStudent.forEach((element) =>{
      if(element.name == name){
        Student = element
        return ;
      }
    })
    console.table(Student)
    return
  }
  findStudentByGroup(group : string): any{
    let listStudent ;
    this.listStudent.forEach((element) =>{
      if(element.name == name){
        listStudent.push(element)
      }
    })
    return listStudent
  }
  findIdStudentByName(name : string){
    let flag = 0 ;
    this.listStudent.forEach((element,index) =>{
      if(element.name == name){
        flag = index ;
        return
      }
    })
    return flag ;
  }
  deleteStudent(name: string){
    let index = this.findIdStudentByName(name)
    this.listStudent.splice(index,1)
  }
}