import { Node } from "./node";
export class LinkedList<T> {
  head : Node <T> ;
  tail : Node <T> ;

  size : number ;

  constructor(){
    this.head = null ;
    this.tail = null ;
    this.size = 0 ;

  }

  addFirstWageEmployee(month : string , wage: number): void{
    let node = new Node(month,wage) ;
    node.next = node ;
    this.head = node ;
    if(!this.tail){
      this.tail = node ;
    }
    this.size++ ;
  }

  addLastWageEmployee(month : string , wage: number){
    if(!this.head){
      this.addFirstWageEmployee(month, wage)
    }else{
      let node = new Node(month,wage)
      this.tail.next = node ;
      this.tail = node ;
      this.size ++ ;
    }
  }

  readList(): number[] | string []{
    let listWage = [] ;
    let currentNode = this.head ;
    while(currentNode !== null){
      listWage.push(currentNode.getEmployeeWage())
      currentNode = currentNode.next ;
    }
    return listWage ;
  }

  listWageEmployy(): number []{
    let listWage = [] ;
    this.readList().forEach((element)=>{
      listWage.push(element.wage)
    })
    return listWage ;
  }

  totalWage() : number{
    let total = 0 ;
    this.listWageEmployy().forEach((element) =>{
      total += element ;
    })
    return total;
  }

  getWageCaoNhat(): number{
    let total = 0 ;
    this.listWageEmployy().forEach((element) =>{
      total = element ;
      if(element > total){
        total = element
      }
    })
    return total;
  }
}