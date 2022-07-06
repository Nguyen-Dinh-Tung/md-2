// class
export class Employee{
  id:number ;
  name: string ;
  gender: Gender ;
  date: string ;
  email: string ;
  phone?: string
  constructor(id:number ,name:string , gender: Gender , date: string , email: string , phone?: string){
    this.id = id
    this.name = name
    this.gender = gender
    this.date = date
    this.email = email
    this.phone = phone
  }
}
// enum
export enum Gender{
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}
