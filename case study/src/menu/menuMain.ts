import { CstCustomer } from './../class/Constant';
import { User } from './../class/User';
import { Login, login } from './../class/Login';
import { Admin, admin } from './../class/Admin';
import { CstAdmin } from '../class/Constant';
import { menuAdmin, menuCustomer } from './menu';
import { questionAdmin } from './menuAdmin';
import { questionCustomer } from './menuUser';

export function questionMain(choice: any ,menu: any ,app: any ,CstMenuMain: any){
  do{

    console.log('\n-- Ngân hàng sấp tới nơi chào bạn --\n')
    menu()

    choice = +app('\nNhập lựa chọn của bạn : ')

    switch(choice){
      case CstMenuMain.OPTION_LOGIN_ADMIN:
        adminControler(app, choice);
        break;
      case CstMenuMain.OPTION_LOGIN_CUSTOMER:
        customerControler(app, choice);
        break;

      case CstMenuMain.OPTION_EXIST:
        console.log('\n-- Chào tạm biệt --\n')
        break;

      default :
      console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
        break;

    }
  }while(choice != CstMenuMain.OPTION_EXIST)

}

function customerControler(app: any, choice: any) {
  console.log('\n-- Đăng nhập tài khoản cá nhân --\n');
  let user = app('\n-- Nhập tên đăng nhập -- :\n');
  let pass = app('\n-- Nhập tên đăng nhập pass -- :\n');
  let flag = isLoginCuster(user, pass);
  let index = -1 ;
  admin.listUser.forEach((element,id) =>{
    if(element.user == user && element.pass == pass){
      return index  = id ;
    }
  })
  let customer = admin.listUser[index]

  if (flag) {
    questionCustomer(choice, app, CstCustomer,customer);
  }

}

function adminControler(app: any, choice: any) {
  console.log('\n-- Đăng nhập admin --\n');
  let admin = app('\n-- Nhập tên đăng nhập admin -- :\n');
  let pass = app('\n-- Nhập tên đăng nhập pass -- :\n');

  let flag = isloginAdmin(admin, pass);
  if (flag) {
    questionAdmin(choice, app, CstAdmin, menuAdmin);
  }
}

function isloginAdmin(admin: any, pass: any) {
  let flag = true;
  if (login.isAdmin(admin, pass) == false) {
    console.log('\n-- Tài khoản không chính xác vui lòng thao tác lại --\n');
    flag = false;
  }
  return flag;
}

function isLoginCuster(user: any, pass: any) {
  let flag = true;
  if (login.isUserCustomer(user, pass) == false) {
    console.log('\n-- Tài khoản không chính xác vui lòng thao tác lại --\n');
    flag = false;
  }
  return flag;
}
