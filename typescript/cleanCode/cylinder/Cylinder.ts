export class Cylinder {
  static getArea(radius : number) : number{
    return radius * radius * Math.PI
  }
  static getPerimeter(radius : number) : number{
    return 2 * radius * Math.PI
  }
  public static getVolume(radius: number, height: number): number {
    let baseArea: number = this.getArea(radius) ;
    let perimeter: number = this.getPerimeter(radius) ;
    let volume: number = perimeter * height + 2 * baseArea;
    return volume;
}
}