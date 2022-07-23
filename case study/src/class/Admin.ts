import { User } from "./User";

export class Admin {
  public listUser : any [] = []
  private user : string  = 'admin' ;
  private pass : string = '123123' ;
  renderListUser():void{
    console.table(this.listUser);
  }

  createUser(
    _name : string,
    _age : number,
    _email : string,
    idCard : string,
    _phone : string ,
    user : string ,
    pass : string ,
    ):void{

    this.listUser.forEach((element)=>{
        element.user = user ;
        element.pass = pass ;
      })
    let users = new User(_name,_age,_email,idCard,_phone)
    let fullInfo = {
      name: users.name,
      age: users.age,
      email: users.email,
      idCard: users.idCard,
      phone: users.phone,
      user: user,
      pass: pass,
      user_money: users.money,
    }

      this.listUser.push(fullInfo)

  }
  deleteCustomer(index: number):void{
    this.listUser.splice(index,1)
  }

  isCustomer(index: number):boolean {
    let flag = true ;
    if(this.listUser[index] == undefined){
      flag = false ;
    }
    return flag ;
  }
  getAminPass(): string{
    return this.pass ;
  }
  getAminUsers(): string{
    return this.user ;
  }
  setAdminUser(user: string): void{
    this.user = user ;
  }
  setAdminPass(pass: string): void{
    this.pass = pass ;
  }
}


//  create Admin
export let admin = new Admin()