import { ResizeAble } from './resizeable';
import { Shape } from './shape';
export class Circle extends Shape implements ResizeAble{
  radius : number ;
  constructor (color , radius: number){
    super(color)
    this.radius = radius
  }
  resize(percent: number) {
    this.radius = this.radius * percent  / 100
  }
}