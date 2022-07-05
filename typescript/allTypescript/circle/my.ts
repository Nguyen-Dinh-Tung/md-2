class Circle{
  public radius:number
  constructor(radius:number){
    this.radius = radius
  }
}
let one = new Circle(9)
let two = new Circle(20)


function prize(one,two,d:number){
  let distance = Math.pow(one.radius - two.radius,2) + Math.pow(d,2)
  return Math.sqrt(distance)
}
console.log(prize(one,two,20))