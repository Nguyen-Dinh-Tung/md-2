import { Point2d } from "./point2d";
class Point3d extends Point2d{
  protected z : number ;
  constructor(x,y,z:number){
    super(x,y) ;
    this.z = z ;
  }
  getPoint3d(): number {
    return super.getPoint2d() + this.z
  }
  getZ():number {
    return this.z ;
  }
  setZ(z:number):void {
    this.z = z ;
  }
  getXYZ():object{
    return {
      'X' : this.x ,
      'Y' : this.y ,
      'Z' : this.z
    }
  }
  setXYZ(x:number , y:number , z:number){
    {this.x = x , this.y = y , this.z = z}
  }
}