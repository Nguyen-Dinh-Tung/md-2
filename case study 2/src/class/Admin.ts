import { History } from './History';
import { User } from "./User";

export class Admin {
  private listUser : User [] = [] ;
  private history : History [] = [] ;
  private user : string  = 'admin' ;
  private pass : string = '123123' ;

  renderListUser(){
    console.table(this.listUser);
  }

  getListUser(): User[]{
    return this.listUser ;
  }

  isUserOfListUser(): boolean{
    if(this.listUser.length == 0){
      console.log('\n-- Danh sách khách hàng rỗng --\n')
      return false ;
    }
    return true ;

  }

  createUser(
    _name : string,
    _phone : string ,
    _age : number,
    _email : string,
    idCard : string,
    user : string ,
    pass : string ,
    ):void{

    let customer = new User(_name,_phone ,_age,_email,idCard)
    customer.setUser(user)
    customer.setPass(pass)
    this.listUser.push(customer)

  }

  deleteCustomer(nameLogin : string):void{
    let index = this.findIdByLoginName(nameLogin)
    if(index != -1){
      this.listUser.splice(index,1)
    }
  }

  findIdByLoginName(nameLogin: string) : number{
    let flag = -1 ;
    this.listUser.forEach((element,index) =>{
      if(element.getUser() == nameLogin){
        flag = index ;
      }
    })
    return flag ;
  }
  sortListCustomerByAge():void{
    this.listUser.sort((a,b) =>{
      return a.getAge() - b.getAge() ;
    })
  }

  loginAdmin(user : string , pass: string): boolean{
    let flag = false ;
    if(user == this.user && pass == this.pass){
      flag = true ;
    }
    return flag ;
  }
  loginCustomer(user : string , pass : string):any{
    let flag = false ;
    this.listUser.forEach((element) =>{
      if(element.getUser() == user && element.getPass() == pass){
        flag = true ;
      }
    })
    return flag ;
  }
  isUserCustomerExist(user: string): boolean{
    let flag = true ;
    this.listUser.forEach((element)=>{
      if(element.getUser() == user){
        console.log('\n-- Tên đăng nhập đã tồn tại --\n')
        return false ;
      }
    })
    return  flag ;
  }

  getCustomer(index : number): User{
    return this.listUser[index]
  }
  getCustomerByNameLogin(customer : User){
    let showInfo : any = [] ;
    let infoNeedShow = {
      name: customer.getName(),
      phone: customer.getPhone(),
      age: customer.getAge(),
      email: customer.getEmail(),
      surplus: customer.getSurplus(),
    }
    showInfo.push(infoNeedShow)
    return showInfo ;
  }
  getListHistory(): History []{
    return this.history
  }
  getListHistoryCustomer(nameLogin : string) : History []{
    let listHistory : History [] = [] ;
    this.history.forEach(element => {
      if(element.getSender() == nameLogin || element.getReceiver() == nameLogin){
        listHistory.push(element)
      }
    });
    return listHistory ;
  }
  createNewHistory(sender : any , receiver: any, amountOfMoney : number): void{
    let newHistory = new History(sender,receiver,amountOfMoney)
    this.history.push(newHistory) ;
  }

}


//  create Admin
export let admin = new Admin()
admin.createUser('Tùng','0337118801',24,'s30.tung@gmail.com','123123321321','takpaj','123');
admin.createUser('linh','0337118801',15,'s30.tung@gmail.com','123123321321','linh','123');
admin.createUser('phoanh','0337118801',28,'s30.tung@gmail.com','123123321321','phoanh','123');
admin.getCustomer(0).setUpSurplus(10000000)
admin.getCustomer(1).setUpSurplus(10000000)
admin.getCustomer(2).setUpSurplus(10000000)
