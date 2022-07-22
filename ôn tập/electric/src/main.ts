import Customer from "./Customer";
import { ElectricBill } from "./ElectricBill";
import * as rl from "readline-sync"
import {Constant} from './Constant'

// var
let appManager = new ElectricBill()
let app = rl.question
let choice = -1 ;

// handle request
do{

  console.log('\n-- Chào mừng đến với dịch vụ thanh toán tiền điện --\n')
  menu()

  choice = +app('\nNhập lựa chọn của bạn : ')

  switch(choice){

    case Constant.OPTION_RENDER_LIST_CUSTOMER:
      showListCustomer();
      break;

    case Constant.OPTION_CREATE_CUSTOMER :
      createNewCustomer();
      break;

    case Constant.OPTION_DELETE_CUSTOMER :
      deleteInfoCustomer();
      break

    case Constant.OPTION_EDIT_CUSTOMER :
      editInfoCustomer();
      break;

    case Constant.OPTION_PAY_BILL:
      payBill();
      break;

    case Constant.OPTION_UPDATE_AMOUNT_ELECTRIC :
      updateNewElectric();
      break;

    case Constant.OPTION_EXIST:
      console.log('\n-- Chào tạm biệt --\n')
      break;

    default :
    console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
      break;

  }
}while(choice != Constant.OPTION_EXIST)

function updateNewElectric() {
  console.log('\n-- Cập nhập lượng điện tiêu thụ mới --\n');
  let index = +app('\n-- Nhập vị trí khách hàng để cập nhật --\n');

  while (appManager.listBill[index] == undefined) {
    console.log('\n-- Vị trí thay đổi sai --\n');
    index = +app('\n-- Nhập vị trí khách hàng để cập nhật --\n');
  }

  let number = +app('\n-- Nhập lượng tiêu thụ mới --\n');
  let check = appManager.updateNewNumberElectric(index, number);

  while (check == false) {
    console.log('\n-- Giá trị mới sai --\n');
    number = +app('\n-- Nhập lượng tiêu thụ mới --\n');
    check = appManager.updateNewNumberElectric(index, number);
  }

  appManager.updateNewNumberElectric(index, number);
}

function payBill() {
  console.log('\n-- Thanh toán tiền điện --\n');
  let index = +app('\n-- Nhập vị trí khách hàng cần thanh toan --\n');
  appManager.payElectric(index);
}

function editInfoCustomer() {
  console.log('\n-- Chỉnh sửa thông tin khách hàng --\n');
  let index = +app('\n-- Nhập vị trí cần sửa --\n');
  let name = app('\n-- Nhập tên mới --\n');
  let numberHouse = app('\n-- Nhập số nhà mới --\n');
  let houseCode = app('\n-- Nhập mã thu tiền mới --\n');
  let customer = new Customer(name, numberHouse, houseCode);
  appManager.editCustomer(index, customer);
}

function deleteInfoCustomer() {
  console.log('\n-- Thanh toán hóa đơn  --\n')
  let index = +app('\n-- Nhập vị trí cần xóa--\n');
  appManager.deleteCustomer(index);
}

function showListCustomer() {
  console.log('\n-- Hiển thị danh sách khác hàng --\n');
  appManager.showListBill();
}

function createNewCustomer() {

  console.log('\n-- Điền thông tin thêm mới --\n')
  let flag ;
  let name = app('\nNhập họ tên khách hàng\n');
  let numberHouse = app('\nNhập số nhà\n');
  let houseCode = app('\nNhập mã hóa đơn\n');
  let customer = new Customer(name, numberHouse, houseCode);
  let oldElectricNumber = +app('\nNhập số điện cũ , nếu chưa sử dụng điền 0\n');
  let newElectricNumber = +app('\nNhập số điện sử dụng đến cuối tháng\n');
  if(newElectricNumber < oldElectricNumber){
    flag = false
  }
  while(flag == false){
    console.log('\nGiá trị khởi tạo số điện mới sai\n')
    newElectricNumber = +app('\nNhập số điện sử dụng đến cuối tháng\n');
    if(newElectricNumber >= oldElectricNumber){
      flag = true ;
    }
  }
  appManager.addBillCustomer(customer, oldElectricNumber, newElectricNumber);

}

function menu(){
  console.log('1.-- Hiển thị danh sách khách hàng --\n')
  console.log('2.-- Tạo mới thông tin khách hàng --\n')
  console.log('3. -- Xóa khách hàng --\n')
  console.log('4. -- Sửa thông tin khách hàng --\n')
  console.log('5. -- Thanh toán hóa đơn điện --\n')
  console.log('6. -- Cập nhập lượng điện tiêu thụ mới --\n')
  console.log('7. -- --\n')

  console.log('0 hoặc Enter . -- Thoát')
}