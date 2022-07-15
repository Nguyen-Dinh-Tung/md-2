import { Patient } from "./Patient";

export class Queue {
  listPatient : any [] ;
  constructor(){
    this.listPatient = [] ;
  }

  renderList(): Patient []{

    console.log(this.listPatient)

    return ;

  }

  addPatient(name : string , priority : number): void{
    let newPatient = new Patient(name,priority)
    this.listPatient.push(newPatient.renderPatient())
  }

  dequeue(){
  }

  sortListPatientByPriority(){
    this.listPatient.sort((a,b) =>{
      return a.priority - b.priority
    })
  }
}