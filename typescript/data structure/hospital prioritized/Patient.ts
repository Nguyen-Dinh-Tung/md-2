export class Patient{
  name : string ;
  priority : number ;

  constructor(name : string , priority : number){
    this.name = name ;
    this.priority = priority ;
  }

  renderPatient(){
    return {
      name : this.name,
      priority : this.priority
    }
  }
}