
export class Stack{

  constructor(){
  }

  arrString(string: string): string []{
    let arr = string.split('')
    return arr
  }
  deleteElement(string : string){
    let value = this.arrString(string).pop()
    return value
  }
}