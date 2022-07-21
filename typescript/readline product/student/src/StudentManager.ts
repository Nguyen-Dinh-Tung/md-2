import { Student } from "./student";
export class StudentManager {
  private listStudent: Student [] = [] ;

  constructor(){}

  showListStudent() : any{
    console.table(this.listStudent)
    return ;
  }

  addStudent(Student : Student): void{
    this.listStudent.push(Student)
  }

  findStudentByName(name : string): any{
    let listStudent : Student [] = [] ;
    this.listStudent.forEach((element) =>{
      if(element._name == name){
        listStudent.push(element)
      }
    })
    console.table(listStudent)
  }

  findStudentByGroup(group : string): any{
    let listStudent : Student [] = [];
    this.listStudent.forEach((element) =>{
      if(element._group == group){
        listStudent.push(element)
      }
    })
    console.table(listStudent)
  }

  findIdStudentByName(name : string){
    let flag = 0 ;
    this.listStudent.forEach((element,index) =>{
      if(element._name == name){
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

  sortStudentByAge(){

    for(let i = 0 ; i < this.listStudent.length ; i++){
      for(let j = 0 ; j < this.listStudent.length - i - 1 ; j++){

        if(this.listStudent[j].getAge() > this.listStudent[j + 1].getAge()){

          let temp = this.listStudent[j]
          this.listStudent[j] = this.listStudent[j + 1]
          this.listStudent[j + 1] = temp

        }
      }
    }
    console.table(this.listStudent)
  }

  editStudent(student: Student , index : number): void{
    this.listStudent[index] = student ;
  }

}