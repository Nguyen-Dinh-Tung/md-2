import { User } from './User';
import { admin } from "./Admin";
// test acount
let user = new User('Tùng',24,'s30.tung@gmail.com','222','0337118801')
let user2 = new User('linh',24,'s30.tung@gmail.com','222','0337118801')
admin.listUser.unshift(user)
user.user = 'takpaj' ;
user.pass = 'test' ;
user.setSurplus(5000000)
admin.listUser.push(user2)
user2.user = 'linh' ;
user2.pass = 'test' ;
user2.setSurplus(5000000)
//

export class Login {
  private managerLoginUser : User [] = [] ;

  isAdmin(user: string , pass: string){
    let flag = false
    if(admin.getAminUsers() == user && admin.getAminPass() == pass){
      flag = true
    }
    return flag;
  }
  isUserCustomer(user: string , pass: string){
    let flag = false
    admin.listUser.forEach((element) =>{
      if(element.user == user && element.pass == pass){
        flag = true ;
      }
    })
    return flag;
  }
}

export let login = new Login()
