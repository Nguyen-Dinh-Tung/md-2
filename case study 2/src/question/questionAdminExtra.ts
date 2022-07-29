import { admin } from './../class/Admin';
import { CstAdminExtra } from "../class/Constant";
import { menuAdminExtra } from "../menu/menu";
import { User } from '../class/User';
import { testAgeCustomer, testEmailCustomer, testIdCard, testPhoneCustomer, testResgisterPass } from './questionAdmin';



export function questionAdminExtra(choice: any ,app: any,){
  let nameCustomer : string = app('\n-- Nhập tên đăng nhập cần chỉnh sửa -- :\n') ;
  let index = admin.findIdByLoginName(nameCustomer)
  let manager = admin.getListUser()
  if(index != -1){
    let customer = manager[index] ;
    do{

      console.log('\n-- Chỉnh sửa thông tin khách hàng --\n') ;
      menuAdminExtra() ;
      choice = +app('\nNhập lựa chọn của bạn : ') ;

      switch(choice){
        case  CstAdminExtra.OPTION_EDIT_NAME:
        editNameCustomer(app, customer);
        break ;

        case  CstAdminExtra.OPTION_EDIT_PHONE:
        editPhoneCustomer(app, customer);
        break ;

        case  CstAdminExtra.OPTION_EDIT_AGE:
        editAgeCustomer(app, customer);

        break ;
        case  CstAdminExtra.OPTION_EDIT_EMAIL:
        editEmailCustomer(app, customer);

        break ;

        case  CstAdminExtra.OPTION_EDIT_IDCARD:
        editIdCardCustomer(app, customer);

        break ;

        case  CstAdminExtra.OPTION_EDIT_PASS:
        editPassCustomer(app, customer);

        break ;

        case CstAdminExtra.OPTION_EXIST:
          console.log('\n-- Chào tạm biệt --\n')
          break ;
        default :
        console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
          break;

      }
    }while(choice != CstAdminExtra.OPTION_EXIST)
  }


}
function editPassCustomer(app: any, customer: User) {
  let pass = app('\n-- Nhập căn cước mới -- :\n');
  customer.setPass(testResgisterPass(pass, app));
  notifySuccess();
}

function editIdCardCustomer(app: any, customer: User) {
  let idCard = app('\n-- Nhập căn cước mới -- :\n');
  customer.setIdCard(testIdCard(idCard, app));
  notifySuccess();
}

function editEmailCustomer(app: any, customer: User) {
  let newEmail = app('\n-- Nhập email mới -- :\n');
  customer.setEmail(testEmailCustomer(newEmail, app));
  notifySuccess();
}

function editAgeCustomer(app: any, customer: User) {
  let newAge = app('\n-- Nhập tuổi mới -- :\n');
  customer.setAge(testAgeCustomer(newAge, app));
  notifySuccess()
}

function editPhoneCustomer(app: any, customer: User) {
  let newPhone = app('\n-- Nhập số điện thoại -- :\n');
  customer.setPhone(testPhoneCustomer(newPhone, app));
  notifySuccess() ;
}

function editNameCustomer(app: any, customer: User) {
  let newName = app('\n-- Nhập tên mới -- :\n');
  customer.setName(newName);
  notifySuccess() ;
}


function notifySuccess(){
  console.log('\n-- Chỉnh sửa thành công --\n');
}