import { ResizeAble } from './resizeable';
import { Shape } from './shape';
export class Rectangle extends Shape implements ResizeAble{
  width : number ;
  height : number ;
  constructor (color ,width : number , height : number){
    super(color)
    this.width = width ;
    this.height = height ;
  }
  resize(percent: number) {
    this.width = this.width * percent / 100
    this.height = this.height * percent / 100
  }
}