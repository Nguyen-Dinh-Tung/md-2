export class Circle{
  protected radius: number ;
  protected color: string ;

  constructor(radius: number , color: string){
    this.radius = radius ;
    this.color = color ;
  }
  getInfo():string{
    return this.radius + ' ' + this.color
  };
  getArea(): number{
    return this.radius*this.radius *3.14
  }
  getPrimeter():number{
    return this.radius*2 * 3.14 ;
  }
}