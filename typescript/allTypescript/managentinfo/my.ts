enum Gender{
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}
class Staff {
  name: string ;
  date: number;
  email: string ;
  phone: string ;
  gender: Gender ;
  constructor(name:string ,gender:Gender, date: number , email: string , phone : string){
    this.name = name
    this.date = date
    this.email = email
    this.phone = phone
    this.gender = gender
  }
}
let a = new Staff('Tung' ,Gender.Male,15,'s30.tung@gmail.com' ,'0337118801')
let b = new Staff('Tung' ,Gender.Male,15,'s30.tung@gmail.com' ,'0337118801')
let c = new Staff('Tung' ,Gender.Male,15,'s30.tung@gmail.com' ,'0337118801')
let listEmployee: Staff[] = [] ;

listEmployee.push(a)
listEmployee.push(b)
listEmployee.push(c)
function render(staff: Staff){
  console.log(staff)
}
listEmployee.forEach(render)