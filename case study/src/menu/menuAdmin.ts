import { history } from './../handle/History';
import { CstAdminEdit } from './../class/Constant';
import { admin } from './../class/Admin';
import { questionAdminEdit } from './menuAdminEditUser';
import { menuAdmin } from './menu';
import { addMessageHistoryAdmin } from '../handle/addHistory';
import { isEmail, isIdCard, isPhoneNumber, isRegisterPass, isRegisterUser } from '../handle/regex';

export function questionAdmin(choice: any ,app: any ,CstAdmin: any,menuAdminEdit:any){
  do{

    console.log('\n-- Trình quản lý khách hàng --\n')
    menuAdmin()
    choice = +app('\nNhập lựa chọn của bạn : ')

    switch(choice){
      case CstAdmin.OPTION_RENDER_LIST_CUSTOMER:
        renderListCustomer();
        break;

      case CstAdmin.OPTION_CREATE_CUSTOMER:
        createNewCustomer(app);
        break;

      case CstAdmin.OPTION_DELETE_CUSTOMER:
        deleteCustomer(app);
        break;

      case CstAdmin.OPTION_EDIT_CUSTOMER:
        editCustomer(choice, app, menuAdminEdit);
        break;

      case CstAdmin.OPTION_UPDATE_MONEY:
        inputMoney(app);
        break;

      case CstAdmin.OPTION_GET_MONEY:
        withDrawMoneyByUser(app);
        break;

      case CstAdmin.OPTION_SORT_CUSTOMER:
        sortCustomerByAge();
        break;
      case CstAdmin.OPTION_FIND_CUSTOMER:
        findUserByNameLogin(app);
        break;

      case CstAdmin.OPTION_EXIST:
        console.log('\n-- Chào tạm biệt --\n')
        break;

      case CstAdmin.OPTION_TRANSFERS_HISTORY:
        renderHistoryAdmin();
        break ;

      default :
      console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
        break;

    }
  }while(choice != CstAdmin.OPTION_EXIST)

}

function findUserByNameLogin(app: any) {
  let nameLogin = app('\n-- Điền tên đăng nhập cần tìm -- :\n');
  if(admin.findIdByUser(nameLogin) == -1){
    console.log('\n-- Tên đăng nhập không tồn tại --\n')
  }else{
    console.table(admin.findUserByNameLogin(nameLogin))
  }
}

function renderHistoryAdmin() {
  let historyAdmin = history.getListlistHistoryAdmin();
  console.table(historyAdmin);
}

function withDrawMoneyByUser(app: any) {
  if (isListUserLength() == true) {
    let { flag, index } = isCustomer(app);
    let numberMoney = +app('\n-- Nhập vào số tiền  -- :\n');

    if (numberMoney >= admin.listUser[index].money) {
      flag = false;
    }
    while (!flag) {
      console.log('\n-- Số tiền chuyển đi vướt quá hạn mức , vui lòng nhập lại số tiền muốn rút --\n');
      numberMoney = +app('\n-- Nhập vào số tiền muốn chuyển -- :\n');
      if (admin.listUser[index].money >= numberMoney) {
        flag = true;
      }
    }

    if (flag) {
      admin.listUser[index].getMoney(numberMoney);
      addMessageHistoryAdmin('admin',admin.listUser[index].getUser() , -numberMoney)
    }
  }
}

function editCustomer(choice: any, app: any, menuAdminEdit: any) {
  if (isListUserLength() == true) {
    questionAdminEdit(choice, app, CstAdminEdit, menuAdminEdit);
  }
}

function sortCustomerByAge() {
  if (isListUserLength() == true) {
    admin.listUser.sort((a, b) => {
      return a.age - b.age;
    });
  }else{

  }
}

function isListUserLength(): boolean {
  let flag = false;
  if (admin.listUser.length != 0) {
    flag = true;
  }else{
    console.log('\n-- Danh sách khách hàng rỗng không thể thực hiện thao tác này --\n')
  }
  return flag ;
}

function inputMoney(app: any) {
  if (isListUserLength() == true) {
    let { flag, index } = isCustomer(app);
    let inputMoney = +app('\n-- Nhập vào số tiền  -- :\n');
    if (flag) {
      admin.listUser[index].setSurplus(inputMoney)
      addMessageHistoryAdmin('admin',admin.listUser[index].getUser() , inputMoney)
    }

  }
}

function deleteCustomer(app: any) {
  if (isListUserLength() == true) {
    let { flag, index } = isCustomer(app);
    if (flag) {
      admin.deleteCustomer(index);
    }
  }
}

function isCustomer(app: any) {
  let index = +app('\n-- Nhập vị trí  -- :\n');
  let flag = false;
  if (admin.isCustomer(index) == true) {
    flag = true;
  }
  while (!flag) {
    console.log('\n-- Vui lòng nhập chính xác vị trí --\n');
    index = +app('\n-- Nhập vị trí -- :\n');
    if (admin.isCustomer(index) == true) {
      flag = true;
    }
  }
  return { flag, index };
}


function createNewCustomer(app: any) {
  console.log('\n-- Tạo mới khách hàng --\n');
  let name = app('\n-- Nhập tên khách hàng -- :\n');
  let phone = app('\n-- Nhập số điện thoại -- :\n');
  phone = formatNumberPhone(phone, app);
  let age = +app('\n-- Nhập tuổi -- :\n');
  age = formartAge(age, app);
  let email = app('\n-- Nhập email -- :\n');
  email = formartEmail(email, app);
  let idCard = app('\n-- Nhập căn cước -- :\n');
  idCard = formartIdCard(idCard, app);
  let user = app('\n-- Nhập tên đăng nhập tài khoản -- :\n');
  user = formartUserLogin(user, app);
  let flag = true;
  ({ user, flag } = duplicateUserLogin(user, flag, app));

  let pass = app('\n-- Nhập mật khẩu tài khoản -- :\n');
  pass = formartPass(pass, app);
  admin.createUser(name, age, email, idCard, phone, user, pass);
  console.log('\n-- Đăng ký thành công --\n');
}

function formartPass(pass: any, app: any) {
  while (isRegisterPass(pass) == false) {
    console.log('\n-- Vui lòng nhập lại pass gồm 8 kí tự bắt đầu bằng chữ --\n');
    pass = app('\n-- Nhập mật khẩu tài khoản -- :\n');
  }
  return pass;
}

function duplicateUserLogin(user: any, flag: boolean, app: any) {
  admin.getListUserLogin().forEach((element) => {
    if (user == element) {
      flag = false;
    }
  });
  while (!flag) {
    console.log('\n-- Tên đăng nhập trùng nhau !--\n');
    user = app('\n-- Nhập tên đăng nhập tài khoản -- :\n');
    if (isRegisterUser(user) == false) {
      console.log('\n-- Tên đăng nhập sai định dạng!--\n');
      user = app('\n-- Nhập tên đăng nhập tài khoản -- :\n');
    }
    flag = true;
    admin.getListUserLogin().forEach((element) => {
      if (user == element) {
        flag = false;
      }
    });

  }
  return { user, flag };
}

function formartUserLogin(user: any, app: any) {
  while (isRegisterUser(user) == false) {
    console.log('\n-- Tên đăng nhập sai định dạng!--\n');
    user = app('\n-- Nhập tên đăng nhập tài khoản -- :\n');
  }
  return user;
}

function formartIdCard(idCard: any, app: any) {
  while (isIdCard(idCard) == false) {
    console.log('\n-- Vui lòng nhập đúng kiểu căn cước công dân --\n');
    idCard = app('\n-- Nhập căn cước -- :\n');
  }
  return idCard;
}

function formartEmail(email: any, app: any) {
  while (isEmail(email) == false) {
    console.log('\n-- Vui lòng nhập đúng kiểu email --\n');
    email = app('\n-- Nhập email -- :\n');
  }
  return email;
}

function formartAge(age: number, app: any) {
  while (age <= 0 || age > 120) {
    console.log('\n-- Số nhập tuổi sai , vui lòng nhập từ 1 - 120 tuổi  --\n');
    age = +app('\n-- Nhập tuổi -- :\n');
  }
  return age;
}

function formatNumberPhone(phone: any, app: any) {
  while (isPhoneNumber(phone) == false) {
    console.log('\n-- Vui lòng nhập đúng kiểu số điện thoại --\n');
    phone = app('\n-- Nhập số điện thoại -- :\n');
  }
  return phone;
}

function renderListCustomer() {
  console.log('\n-- Hiển thị danh sách khách hàng --\n');
  admin.renderListUser();
}

