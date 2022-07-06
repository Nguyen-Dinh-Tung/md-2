class Circle{
  radius:number;
  color:string;
  constructor(radius:number , color:string){
    this.radius = radius;
    this.color = color;
  }
}
let arr : Circle[] = [] ;
let a = new Circle(15, 'blue') ;
let b = new Circle(10, 'red') ;
let c = new Circle(20, 'green') ;
arr.push(a)
arr.push(b)
arr.push(c)
function showCircle(circle:Circle){
  console.log('Ban kinh' + circle.radius + ' Mau :' + circle.color)
}
arr.forEach(showCircle)