export class Shape{
  protected color: string ;
  protected filled: boolean ;
  constructor(color: string , filled : boolean){
    this.color = color;
    this.filled = filled;
  }
  getInfo(){
    return 'Color: ' + this.color + ' Filled : ' + this.filled ;
  }
  getColor(): string{
    return 'Color: ' + this.color
  }
  setColor(color : string): void{
    this.color = color ;
  }
  isFilled(){
    return this.filled
  }
  setFilled(value: boolean): void{
    this.filled = value
  }
}