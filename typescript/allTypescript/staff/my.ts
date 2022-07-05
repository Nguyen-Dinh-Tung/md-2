class Staff{
  name:string
  email:string
  age:number
  constructor(name,email,age){
    this.name = name
    this.age = age
    this.email = email
  }
  getInfo(){
    return 'Tên : ' + this.name + ' Tuổi : ' + this.age + ' Email : ' + this.email
  }
  getName(){
    return 'Tên : ' + this.name
  }
  getAge(){
    return ' Tuổi : ' + this.age
  }
  getEmail(){
    return ' Email : ' + this.email
  }
  setName(name:string){
    this.name = name
  }
  setEmail(email:string){
    this.email = email
  }
  setAge(age:number){
    this.age = age
  }
}
let pr = new Staff('Phoanh' , 'S30.tung@gmail' , 24 )
pr.setAge(15)
console.log(pr.getInfo())