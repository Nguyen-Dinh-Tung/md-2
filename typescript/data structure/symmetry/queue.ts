
export class Queue{

  constructor(){
  }

  arrString(string: string): string []{
    let arr = string.split('')
    return arr
  }
  deleteElement(string : string){
    let value = this.arrString(string).shift()
    return value
  }
}