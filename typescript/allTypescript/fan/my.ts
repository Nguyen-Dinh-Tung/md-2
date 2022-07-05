class Fan {
  slow: number;
  medium: number;
  fast: number;
  speed:number;
  on:boolean;
  radius:number;
  color:string
  constructor() {
    this.slow = 1;
    this.medium = 2;
    this.fast = 3;
    this.speed = this.slow;
    this.color = 'blue'
    this.radius;
  }
  getInfo(){
    if(this.on == true){
      return 'Speed : ' + this.speed + ' Color : ' + this.color + ' Radius : ' + this.radius
    }
  }
  getSlow(){
    return this.slow
  }
  getMedium(){
    return this.medium
  }
  getFast(){
    return this.fast
  }
  setSpeed(type){
    return this.speed = type
  }
  setOn(){
    this.on = true;
  }
  setOff(){
    this.on = false;
  }
  setColor(color){
    this.color = color
  }
  getColor(){
    return this.color
  }
  setRadius(number){
    this.radius = number
  }
  getRadius(){
    return this.radius
  }
}
let fan1 = new Fan()
fan1.setOn()
console.log(fan1.getColor())