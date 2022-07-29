import { percentForMonth, percentOneMonth, percentOneYear } from './../class/Constant';
import { admin } from './../class/Admin';
import { CstCustomer, CstOutMoney } from "../class/Constant";
import { menuUser } from "../menu/menu";
import { testResgisterPass } from './questionAdmin';
import { questionCustomerExtra } from './questionCustomerExtra';

export function questionCustomer(choice: any ,app: any , customer : any){
  do{

    console.log('\n-- Ngân hàng sập đến nơi xin chào bạn --\n')
    menuUser()

    choice = +app('\nNhập lựa chọn của bạn : ')

    switch(choice){
      case CstCustomer.OPTION_RENDER_INFOR :
        renderInfoCustomer(customer);
        break;
      case CstCustomer.OPTION_GET_MONEY :
        drawWithCash(app, customer);
        break;
      case CstCustomer.OPTION_TRANSFERS :
        transfersCustomer(app, customer);
      break;
      case CstCustomer.OPTION_CHANGE_PASS :
        changePass(app, customer);
      break;
      case CstCustomer.OPTION_CACULATOR_INTERES :
        calcInterest(app, customer);
        break;
      case CstCustomer.OPTION_MORE_SEVIRCE :
        questionCustomerExtra(choice,app,customer)
        break;
      case CstCustomer.OPTION_SHOW_HISTORY :
        if(admin.getListHistoryCustomer(customer.getUser()) != undefined){
          console.table(admin.getListHistoryCustomer(customer.getUser()))
        }else{
          console.log('\n-- Tài khoản của quý khách chưa có giao dịch--\n')
        }
        break;
      case CstCustomer.OPTION_EXIST :
        console.log('\n-- Chào tạm biệt --\n')
        break;
      default :
      console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
        break;

    }
  }while(choice != CstCustomer.OPTION_EXIST)

}

function calcInterest(app: any, customer: any) {
  let day = +app('\n-- Nhập vào số ngày lãi -- :\n');
  if (day < 120) {
    console.log('\n Tổng lãi quý khách nhận được là : "' + customer.getInterest(percentOneMonth, day));
  } else if (day > 120) {
    console.log('\n Tổng lãi quý khách nhận được là : "' + customer.getInterest(percentForMonth, day));
  } else if (day >= 365) {
    console.log('\n Tổng lãi quý khách nhận được là : "' + customer.getInterest(percentOneYear, day));
  }
}

function changePass(app: any, customer: any) {
  let oldPass = app('\n-- Nhập mật khẩu cũ -- :\n');
  while (oldPass != customer.getPass()) {
    console.log('\n-- Mật khẩu cũ không chính xác --\n');
    oldPass = app('\n-- Nhập mật khẩu cũ -- :\n');
  }
  let newPass = app('\n-- Nhập mật khẩu mới -- :\n');
  newPass = testResgisterPass(newPass, app);
  let newPassMore = app('\n-- Nhập mật khẩu lại mới -- :\n');
  while (newPass != newPassMore) {
    console.log('\n-- Mật khẩu mới nhập lại không chính xác --\n');
    newPassMore = app('\n-- Nhập mật khẩu lại mới -- :\n');
  }
  customer.setPass(newPassMore);
}

function drawWithCash(app: any, customer: any) {
  let outMoney = +app('\n-- Nhập vào số tiền muốn rút -- :\n');
  if (outMoney < customer.getSurplus()) {
    customer.setDownSurplus(outMoney);
    admin.createNewHistory(customer.getUser(), CstOutMoney, outMoney);
    successHandle();
  } else {
    failHandle();
  }
}

function transfersCustomer(app: any, customer: any) {
  let userLoginReceiver = app('\n-- Nhập -- :\n');
  let index = admin.findIdByLoginName(userLoginReceiver);
  if (index != -1) {
    let receiver = admin.getCustomer(index);
    let money = +app('\n-- Nhập số tiền chuyển -- :\n');
    if (customer.getSurplus() > money) {
      customer.setDownSurplus(money);
      receiver.setUpSurplus(money);
      admin.createNewHistory(customer.getUser(), receiver.getUser(), money);
      successHandle();
    } else {
      failHandle();
    }
  }else{
    console.log('\n-- Tên tài khoản nhận tiền không tồn tại --\n')
  }
}

function renderInfoCustomer(customer: any) {
  let infor = admin.getCustomerByNameLogin(customer);
  console.table(infor);
}
function successHandle(){
  console.log('\n-- Giao dịch thành công --\n')
}
function failHandle(){
  console.log('\n-- Giao dịch không thành công --\n')
}
