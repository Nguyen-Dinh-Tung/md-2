import { Colorable } from "./colorable";
export class Square implements Colorable {
  radius : number ;
  color : string ;
  constructor(radius : number , color : string){
    this.radius = radius ;
    this.color = color ;
  }
  howToColor() {
    return 'Color all four sides.'
  }
}