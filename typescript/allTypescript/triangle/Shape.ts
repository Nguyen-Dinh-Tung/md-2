export class Shape{
  protected color : string ;
  constructor(color: string){
    this.color = color ;
  }
  getInfo(): string{
    return this.color
  }
}