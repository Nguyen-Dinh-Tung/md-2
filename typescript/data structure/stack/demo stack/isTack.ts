export interface IsStack <T>{
  push(item: T) : void ;
  pop(): T | undefined ;
  peek(): T | undefined ;
  size() : number ;
}