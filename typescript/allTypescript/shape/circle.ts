import { Shape } from "./shape";
class Circle extends Shape{
  protected radius: number ;
  constructor(color,filled,radius: number){
    super(color,filled) ;
    this.radius = radius  ;
  }
  getInfo() {
    return   super.getInfo() + 'Radius : ' + this.radius
  }
  getRadius():number{
    return this.radius
  }
  setRadius(radius:number){
    this.radius = radius ;
  }
  getArea():number{
    return this.radius * this.radius * 3.14
  }
  getPrimeter():number{
    return this.radius * 2 * 3.14
  }
}
const b = new Circle('blue', true , 24)
console.log(b.getInfo())