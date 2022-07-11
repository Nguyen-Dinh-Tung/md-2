export class Circle{
  private radius: number ;
  constructor (radius : number){
    this.radius = radius ;
  }
  getRadius():number | string {
    return 'Bán kính' + this.radius ;
  }
  setRadius(radius):void {
    this.radius = radius ;
  }
  toString():string{
    return 'A cirle with radius = ' + this.getRadius() ;
  }
}