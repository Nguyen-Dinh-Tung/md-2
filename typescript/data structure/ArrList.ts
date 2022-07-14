import { IArrList } from "./itfArrlist";
export class ArrayList <T> implements IArrList <T>{

  container : Array <T>;

  constructor(){
    this.container = [] ;
  }

  add(data: T): void {
    this.container.push(data) ;
  }

  get(index: number): T {

    return this.container[index] ;

  }

  size(): number {
    return 0 ;
  }

  remove(): void {
    this.container.pop()
  }

}