import { admin } from "./Admin";
import { User } from "./User";
// test acount
// let user = new User('Tùng',24,'s30.tung@gmail.com','222','0337118801')
// admin.listUser.unshift(user)
// admin.listUser.forEach((element) =>{
//   element.user = 'takpaj'
//   element.pass = 'test'
// })

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
