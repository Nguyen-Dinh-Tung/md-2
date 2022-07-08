import { Shape } from "./shape";
export class Rectangle extends Shape{
  protected width : number ;
  protected height : number ;
  constructor(color,filled , width: number , height : number){
    super(color , filled);
    this.width = width ;
    this.height = height ;
  }
  getInfo(): string {
    return super.getInfo() + ' Width : ' + this.width + ' Height : ' + this.height ;
  }
  getWidth():number{
    return this.width
  }
  setWidth(width):void {
    this.width = width ;
  }
  getHeight():number{
    return this.height ;
  }
  setHeight(height):void{
    this.height = height ;
  }
  getArea():number{
    return this.width * this.height ;
  }
  getPrimeter(): number{
    return (this.width + this.height) * 2
  }
}