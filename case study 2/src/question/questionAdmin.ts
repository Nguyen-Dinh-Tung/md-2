import { admin } from './../class/Admin';
import { CstAdmin } from "../class/Constant";
import { menuAdmin, menuAdminExtra } from "../menu/menu";
import { isAge, isEmail, isIdCard, isPhoneNumber, isRegisterPass, isRegisterUser } from '../extra/regex';
import { questionAdminExtra } from './questionAdminExtra';

export function questionAdmin(choice: any ,app: any){
  do{

    console.log('\n-- Quản lý khách hàng --\n')
    menuAdmin()
    choice = +app('\nNhập lựa chọn của bạn : ')

    switch(choice){
      case  CstAdmin.OPTION_CREATE_CUSTOMER:
        createNewCustomer(app);
        break ;
      case CstAdmin.OPTION_RENDER_LIST_CUSTOMER :
        renderListCustomer();
        break;
      case CstAdmin.OPTION_DELETE_CUSTOMER :
        deleteCustomer(app);
        break;
      case CstAdmin.OPTION_EDIT_CUSTOMER :
        questionAdminExtra(choice,app)
        break;
      case CstAdmin.OPTION_UPDATE_SURPLUS :
        updateMoneyCustomer(app);
        break;
      case CstAdmin.OPTION_WITH_DRAW :
        withDrawMoneyCustomer(app);
        break;
      case CstAdmin.OPTION_FIND_CUSTOMER:
        findCustomer(app);
        break;
      case CstAdmin.OPTION_SORT_CUSTOMER:
        if (admin.isUserOfListUser() == true) {
          admin.sortListCustomerByAge()
        }
        break;

      case CstAdmin.OPTION_RENDER_HISTORY:
        console.table(admin.getListHistory())
      // case  CstAdmin :
      //   break;
      default :
      console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
        break;

    }
  }while(choice != CstAdmin.OPTION_EXIST)

}
function findCustomer(app: any) {
  console.log('\n-- Điền tên đăng nhập cần tìm --\n');
  let listRender = [];
  if (admin.isUserOfListUser() == true) {
    let userCustomer = app('\n-- Tên đăng nhập -- :\n');
    let index = admin.findIdByLoginName(userCustomer);
    if (index != -1) {
      listRender.push(admin.getCustomer(index));
    }
  }
  console.table(listRender);
}

function withDrawMoneyCustomer(app: any) {
  console.log('\n-- Rút tiền --\n');
  if (admin.isUserOfListUser() == true) {
    let userCustomer = app('\n-- Điền tên đăng nhập nhập tiền -- :\n');
    let index = admin.findIdByLoginName(userCustomer);
    if (index != -1) {
      let money = +app('\n-- Nhập số tiền muốn rút -- :\n');
      if (admin.getCustomer(index).getSurplus() >= money) {
        admin.getCustomer(index).setDownSurplus(money);
        admin.createNewHistory('admin', admin.getCustomer(index).getUser(), money);
      } else {
        failHandle();
      }
    }
  }
}

function updateMoneyCustomer(app: any) {
  if (admin.isUserOfListUser() == true) {
    let userCustomer = app('\n-- Điền tên đăng nhập nhập tiền -- :\n');
    let index = admin.findIdByLoginName(userCustomer);
    if (index != -1) {
      let inputMoney = +app('\n-- Nhập số tiền nạp -- :\n');
      admin.getCustomer(index).setUpSurplus(inputMoney);
      admin.createNewHistory('admin', admin.getCustomer(index).getUser(), inputMoney);
      successHandle();
    }else{
      errorUserCustomer()
    }
  }
}

function deleteCustomer(app: any) {
  if (admin.isUserOfListUser() == true) {
    let userCustomer = app('\n-- Nhập tên tài khoản cần xóa -- :\n');
    admin.deleteCustomer(userCustomer);
  }
}

function renderListCustomer() {
  if (admin.isUserOfListUser() == true) {
    admin.renderListUser();
  }
}

function createNewCustomer(app: any) {
  let nameCustomer = app('\n-- Nhập tên khách hàng -- :\n');
  let phone = app('\n-- Nhập Số điện thoại khách hàng -- :\n');
  phone = testPhoneCustomer(phone, app);

  let age = +app('\n-- Nhập tuổi khách hàng -- :\n');
  age = testAgeCustomer(age, app);

  let email = app('\n-- Nhập Email khách hàng -- :\n');
  email = testEmailCustomer(email, app);

  let idCard = app('\n-- Nhập căn cước công dân của khách hàng -- :\n');
  idCard = testIdCard(idCard, app);

  let user = app('\n-- Tên đăng nhập -- :\n');
  user = testResgisterName(user, app);

  let pass = app('\n-- Nhập mật khẩu -- :\n');
  pass = testResgisterPass(pass, app);
  admin.createUser(nameCustomer, phone, age, email, idCard, user, pass);
}

export function testResgisterPass(pass: any, app: any) {
  while (isRegisterPass(pass) == false) {
    console.log('\n-- Mật khẩu bao gồm 8 kí tự chữ và số --\n');
    pass = app('\n-- Nhập mật khẩu -- :\n');
  }
  return pass;
}

export function testResgisterName(user: any, app: any) {
  while (isRegisterUser(user) == false) {
    console.log('\n-- Tên đăng nhập gồm 8 kí tự chữ hoặc số --\n');
    user = app('\n-- Tên đăng nhập -- :\n');
  }
  while (admin.isUserCustomerExist(user) == false) {
    console.log('\n-- Tên đăng nhập gồm 8 kí tự chữ số --\n');
    user = app('\n-- Tên đăng nhập -- :\n');
  }
  return user;
}

export function testIdCard(idCard: any, app: any) {
  while (isIdCard(idCard) == false) {
    console.log('\n-- Định dạng căn cước không đúng --\n');
    idCard = app('\n-- Nhập căn cước công dân của khách hàng -- :\n');
  }
  return idCard;
}

export function testEmailCustomer(email: any, app: any) {
  while (isEmail(email) == false) {
    console.log('\n-- Định dạng email không đúng --\n');
    email = app('\n-- Nhập Email khách hàng -- :\n');
  }
  return email;
}

export function testAgeCustomer(age: number, app: any) {
  while (isAge(age) == false) {
    console.log('\n-- Tuổi khách hàng phải từ 1 - 120 --\n');
    age = +app('\n-- Nhập tuổi khách hàng -- :\n');
  }
  return age;
}

export function testPhoneCustomer(phone: any, app: any) {
  while (isPhoneNumber(phone) == false) {
    console.log('\n-- Số điện thoại không đúng định dạng --\n');
    phone = app('\n-- Nhập Số điện thoại khách hàng -- :\n');
  }
  return phone;
}

export function successHandle(){
  console.log('\n-- Giao dịch thành công --\n')
}
export function failHandle(){
  console.log('\n-- Giao dịch không thành công --\n')
}
function errorUserCustomer(){
  console.log('Tên đăng nhập không tồn tại')
}