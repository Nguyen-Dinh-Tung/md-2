export class Employee{
  protected id : number ;
  protected lastName : string ;
  protected firstName : string ;
  protected date : string ;
  protected address : string ;
  protected role : string ;
  constructor(id: number , lastName : string , firstName : string , date : string , address : string , role : string){
    this.id = id ;
    this.lastName = lastName ;
    this.firstName = firstName ;
    this. date = date ;
    this.address = address ;
    this.role = role ;
  }
  getInfo(){
    return 'Id : ' + this.id + ' Họ : ' + this.lastName + ' Tên : ' + ' Ngày sinh : ' + this.date + 'ádd'
  }
  getId(){
    return this.id
  }
}