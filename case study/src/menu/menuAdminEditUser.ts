import { admin } from './../class/Admin';
import { menuAdminEdit } from './menu';

export function questionAdminEdit(choice: any ,app: any ,CstAdminEdit: any,menuAdmin:any){
  do{

    console.log('\n-- Quản lý chỉnh sửa thông tin khách hàng --\n')
    menuAdminEdit()

    choice = +app('\nNhập lựa chọn của bạn : ')

    switch(choice){
      case CstAdminEdit.OPTION_EDIT_NAME:
        editNameCustomer(app);
        break;
      case CstAdminEdit.OPTION_EDIT_AGE:
        editAgeCustomer(app);
        break;
      case CstAdminEdit.OPTION_EDIT_EMAIL:
        editEmailCustomer(app)
        break;
      case CstAdminEdit.OPTION_EDIT_PHONE:
        editPhoneCustomer(app)
        break;
      case CstAdminEdit.OPTION_EDIT_IDCARD:
        editIdCardCustomer(app)
        break;
      case CstAdminEdit.OPTION_EDIT_PASS:
        editPassCustomer(app)
        break;
      case CstAdminEdit.OPTION_EDIT_USER:
        editUserCustomer(app)
        break;

      case CstAdminEdit.OPTION_EXIST:
        console.log('\n-- Chào tạm biệt --\n')
        break;

      default :
      console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
        break;

    }
  }while(choice != CstAdminEdit.OPTION_EXIST)

}

function editUserCustomer(app: any) {
  let { flag, index } = isCustomer(app);
  let user = app('\n-- Nhập tên đăng nhập mới -- :\n');
  if (flag) {
    admin.listUser[index].user = user;
  }
}

function editPassCustomer(app: any) {
  let { flag, index } = isCustomer(app);
  let pass = app('\n-- Nhập mật khẩu mới -- :\n');
  if (flag) {
    admin.listUser[index].pass = pass;
  }
}

function editIdCardCustomer(app: any) {
  let { flag, index } = isCustomer(app);
  let idCard = app('\n-- Nhập số căn cước mới -- :\n');
  if (flag) {
    admin.listUser[index].idCard = idCard;
  }
}

function editPhoneCustomer(app: any) {
  let { flag, index } = isCustomer(app);
  let phone = app('\n-- Nhập số điện thoại mới -- :\n');
  if (flag) {
    admin.listUser[index].phone = phone;
  }
}


function editEmailCustomer(app: any) {
  let { flag, index } = isCustomer(app);
  let age = app('\n-- Nhập email mới -- :\n');
  if (flag) {
    admin.listUser[index].age = age;
  }
}

function editAgeCustomer(app: any) {
  let { flag, index } = isCustomer(app);
  let email = app('\n-- Nhập tuổi mới -- :\n');
  if (flag) {
    admin.listUser[index].email = email;
  }
}

function editNameCustomer(app: any) {
  let { flag, index } = isCustomer(app);

  let name = app('\n-- Nhập họ tên mới -- :\n');
  if (flag) {
    admin.listUser[index].name = name;
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

