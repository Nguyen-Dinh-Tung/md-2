import { Shape } from "./Shape";
class Triangle extends Shape{
  protected side1: number;
  protected side2: number;
  protected side3: number;
  constructor(color ,side1: number , side2: number , side3: number ){
    super(color)
    this.side1 = side1 ;
    this.side2 = side2 ;
    this.side3 = side3 ;
  }
  getInfo():any{
    return super.getInfo() + ' Side1 : ' + this.side1 + ' Side2 : ' + this.side2 + ' Side3 : ' + this.side3 ;
  }
  getPrimeter(): number{
    return this.side1 + this.side2 + this.side3 ;
  }
  isTriangle(): boolean{
    return(
    this.side1 + this.side2 == this.side3 &&
    this.side1 + this.side3 == this.side2 &&
    this.side2 + this.side3 == this.side1
    )
  }
  getArea():any{
    if(this.isTriangle()){
      return Math.sqrt((this.getPrimeter()/2) * (this.getPrimeter()/2 - this.side1) * (this.getPrimeter()/2 - this.side2) *(this.getPrimeter()/2 - this.side3) )
    }else{
      return ' Please check your side'
    }
  }
}