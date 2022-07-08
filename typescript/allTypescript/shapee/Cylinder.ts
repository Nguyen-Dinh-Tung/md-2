import { Circle } from "./Circle";
class Cynlinder extends Circle{
  protected height: number ;
  constructor(radius , color , height: number){
    super(radius,color)
    this.height = height
  }
  getInfo(): string {
    return super.getInfo() + ' Height : ' + this.height
  }
  getArea(): number {
    return super.getArea() * this.height ;
  }
}