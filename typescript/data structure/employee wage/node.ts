export class Node<T>{
  month : string ;
  wage : number ;
  next : Node <T> | null;

  constructor(month : string , wage : number){
    this.month = month ;
    this.wage = wage ;
  }

  getEmployeeWage(){
    return {
      month : this.month ,
      wage : this.wage
    }
  }
}