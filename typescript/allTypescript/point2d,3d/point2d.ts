export class Point2d {
 protected x : number ;
 protected y : number ;
 constructor(x:number , y:number){
   this.x = x ;
   this.y = y ;
 }
 getPoint2d(): number{
   return this.x + this.y ;
 }
 getX():number{
   return this.x ;
 }
 getY():number{
   return this.y
 }
 setX(x:number ): void{
   this.x = x
 }
 setY(y:number) : void{
   this.y = y
 }
 getXY():object {
   return {'X': this.x , 'Y:': this.y}
  }
  setXY(x:number , y:number): void{
    {this.x = x , this.y = y}
  }

}