import { CstAdminEdit } from './../class/Constant';
import { admin } from './../class/Admin';
import { questionAdminEdit } from './menuAdminEditUser';
import { menuAdmin } from './menu';

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

      case CstAdmin.OPTION_SORT_CUSTOMER:
        sortCustomerByAge();
        break;

      case CstAdmin.OPTION_EXIST:
        console.log('\n-- Chào tạm biệt --\n')
        break;

      default :
      console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
        break;

    }
  }while(choice != CstAdmin.OPTION_EXIST)

}

function editCustomer(choice: any, app: any, menuAdminEdit: any) {
  isListUserLength();
  if (isListUserLength() == true) {
    questionAdminEdit(choice, app, CstAdminEdit, menuAdminEdit);
  } else {
    console.log('\n-- Danh sách khách hàng rỗng không thể thực hiện thao tác này --\n');
  }
}

function sortCustomerByAge() {
  isListUserLength();
  if (isListUserLength() == true) {
    admin.listUser.sort((a, b) => {
      return a.age - b.age;
    });
  }
}

function isListUserLength(): boolean {
  let flag = false;
  if (admin.listUser.length != 0) {
    flag = true;
  }
  return flag ;
}

function inputMoney(app: any) {

  isListUserLength();
  if (isListUserLength() == true) {
    let { flag, index } = isCustomer(app);
    let inputMoney = app('\n-- Nhập vào số tiền  -- :\n');
    if (flag) {
      admin.listUser[index].money = inputMoney;
    }
  }else{
    console.log('\n-- Danh sách khách hàng rỗng không thể thực hiện thao tác này --\n')
  }


}

function deleteCustomer(app: any) {
  isListUserLength();
  if (isListUserLength() == true) {

    let { flag, index } = isCustomer(app);
    if (flag) {
      admin.deleteCustomer(index);
    }
  }else{
    console.log('\n-- Danh sách khách hàng rỗng không thể thực hiện thao tác này --\n')
  }
}

function isCustomer(app: any) {
  let index = +app('\n-- Nhập vị trí cần xóa -- :\n');
  let flag = false;
  if (admin.isCustomer(index) == true) {
    flag = true;
  }
  while (!flag) {
    console.log('\n-- Vui lòng nhập chính xác vị trí cần chỉnh sửa --\n');
    index = +app('\n-- Nhập vị trí cần chỉnh sửa -- :\n');
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
  let age = +app('\n-- Nhập tuổi -- :\n');
  let email = app('\n-- Nhập email -- :\n');
  let idCard = app('\n-- Nhập căn cước -- :\n');
  let user = app('\n-- Nhập tên đăng nhập tài khoản -- :\n');
  let pass = app('\n-- Nhập mật khẩu tài khoản -- :\n');

  admin.createUser(name, age, email, idCard, phone, user, pass);
  console.log('\n-- Đăng ký thành công --\n');
}

function renderListCustomer() {
  console.log('\n-- Hiển thị danh sách khách hàng --\n');
  admin.renderListUser();
}

