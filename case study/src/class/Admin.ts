import { getTime } from "./Constant";
import { TransfersHistory } from "./TransfersHistory";
import { User } from "./User";

export class Admin {
  public listUser : any [] = []
  private user : string  = 'admin' ;
  public listUserLogin : string [] = [] ;
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

    let users = new User(_name,_age,_email,idCard,_phone)
    users.user = user
    users.pass = pass
      this.listUser.push(users)

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
  getListUserLogin(): string[]{
    this.listUser.forEach((element) =>{
      this.listUserLogin.push(element.getUser())
    })
    return this.listUserLogin
  }
  findIdByUser(nameLogin: string): number{
    let id = -1 ;
    this.listUser.forEach((element,index)=>{
      if(element.getUser() == nameLogin){
        id = index;
      }
    })
    return id ;
  }
  findUserByNameLogin(nameLogin: string): User []{
    let index = this.findIdByUser(nameLogin) ;
    let listUser :User [] = [] ;
    if(index != -1){
      listUser.push(this.listUser[index])
    }else{
      console.log('\n-- Tên đăng nhập không tồn tại --\n')
    }
    return listUser
  }

}


//  create Admin
export let admin = new Admin()