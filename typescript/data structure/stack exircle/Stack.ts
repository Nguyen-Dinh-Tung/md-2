export class Stack{
  list : any [] ;
  constructor(){
    this.list = [] ;
  }

  add(value : any){
    this.list.push(value)
  }


  remove(){
    let value = this.list.pop()
    return value
  }

}