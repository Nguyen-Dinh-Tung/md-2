import { admin } from './../class/Admin';
import { CstMenuMain } from "../class/Constant";
import { menuMain } from "../menu/menu";
import { questionAdmin } from './questionAdmin';
import { questionCustomer } from './questionCustomer';

export function questionMain(choice: any ,app: any){
  do{

    console.log('\n-- Ngân hàng sập đến nơi xin chào bạn --\n')
    menuMain()

    choice = +app('\nNhập lựa chọn của bạn : ')

    switch(choice){
      case CstMenuMain.OPTION_LOGIN_ADMIN :
        adminController(app, choice);

        break;
      case CstMenuMain.OPTION_LOGIN_CUSTOMER :
        customerController(app, choice);
        break;
      default :
      console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
        break;

    }
  }while(choice != CstMenuMain.OPTION_EXIST)

}

function customerController(app: any, choice: any) {
  console.log('\n-- Đăng nhập tài khoản khách hàng --\n');
  let userCustomer = app('\n-- Tên đăng nhập -- :\n');
  let passCustomer = app('\n-- Tên mật khẩu -- :\n');
  let flagCustomer = isLoginCustomer(userCustomer, passCustomer);
  if (flagCustomer == true) {
    let customer = admin.getCustomer(admin.findIdByLoginName(userCustomer));
    questionCustomer(choice, app, customer);
  }
}

function adminController(app: any, choice: any) {

  console.log('\n-- Đăng nhập tài khoản admin --\n');
  let userAdmin = app('\n-- Tên đăng nhập -- :\n');
  let passAdmin = app('\n-- Mật khẩu -- :\n');
  let flagAdmin = isLoginAdmin(userAdmin, passAdmin);
  if (flagAdmin == true) {
    questionAdmin(choice, app);
  }
}

function isLoginAdmin(userLogin: string, pass: string):boolean {

  let flag = false ;

  if (admin.loginAdmin(userLogin, pass) == true) {
    console.log('\n-- Đăng nhập thành công --\n');
    flag = true ;
  } else {
    console.log('\n-- Đăng nhập thất bại --\n');
  }
  return flag ;

}
function isLoginCustomer(userLogin: string, pass: string):boolean {
  let flag = false
  if(admin.loginCustomer(userLogin,pass) == true){
    flag = true ;
  }
  return flag ;
}
