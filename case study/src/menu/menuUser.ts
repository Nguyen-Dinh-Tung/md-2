import { addMessageHistory } from '../handle/addHistory';
import {  history } from '../handle/History';
import { admin } from './../class/Admin';
import { questionExtra } from './extraMenuUser';
import { menuCustomer } from "./menu";

export function questionCustomer(choice: any ,app: any ,CstCustomer: any,customer: any){
  do{

    console.log('\n-- Xin chào --\n')
    menuCustomer()
    choice = +app('\nNhập lựa chọn của bạn : ')
    switch(choice){
      case CstCustomer.OPTION_RENDER_INFO_CUSTOMER:
        showInfoCustomer(customer);
      break ;
      case CstCustomer.OPTION_GET_MONEY:
        getMoney(app, customer);
      break ;
      case CstCustomer.OPTION_EDIT_PASS:
        changePass(app, customer);
      break ;
      case CstCustomer.OPTION_CALC_INTEREST:
        calcInterest(app, customer);
      break ;
      case CstCustomer.OPTION_TRANSFERS:
        transfersMoney(app, customer);
        break ;

      case CstCustomer.OPTION_TRANSFERS_HISTORY:
        renderHistoryStranfers(customer);
      break ;
      case CstCustomer.OPTION_OTHER:
        questionExtra(choice ,app,customer)
      break ;
      case CstCustomer.OPTION_EXIST:
        console.log('\n-- Chào tạm biệt --\n')
        break;

      default :
      console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
        break;

    }
  }while(choice != CstCustomer.OPTION_EXIST)

}



function renderHistoryStranfers(customer: any) {
  let historyCustimer = history.getListHistoryCustomer(customer.getUser());
  console.table(historyCustimer);
}

function transfersMoney(app: any, customer: any) {
  console.log('\n-- Chuyển tiền --\n');
  let nameLogin = app('\n-- Nhập tên đăng nhập người nhận tiền  -- :\n');

  let flag = false;
  let id = -1;

  nameLogin = findNameLoginReveci(flag, id, nameLogin, app);

  let moneyTransferred = +app('\n-- Nhập vào số tiền muốn chuyển -- :\n');

  ({ moneyTransferred, flag } = isSurplusCustomer(moneyTransferred, customer, flag, app));
  let sentMoney = customer.getMoneyToTransfer(moneyTransferred);
  console.log(customer.getUser() + ' check')
  addMessageHistory(customer.getUser(), nameLogin, moneyTransferred);
  admin.listUser[id].setSurplus(sentMoney);
}



function findNameLoginReveci(flag: boolean, id: number, nameLogin: any, app: any) {
  ({ flag, id } = findNameLogin(nameLogin, flag, id));

  while (!flag) {
    console.log('\n-- Tên đăng nhập người nhận không chính xác --\n');
    nameLogin = app('\n-- Nhập tên đăng nhập người nhận tiền  -- :\n');
    ({ flag, id } = findNameLogin(nameLogin, flag, id));
  }
  return nameLogin;
}

function isSurplusCustomer(moneyTransferred: number, customer: any, flag: boolean, app: any) {
  if (moneyTransferred > customer.money) {
    flag = false;
  }
  while (!flag) {
    console.log('\n-- Số tiền chuyển đi vướt quá hạn mức , vui lòng nhập lại số tiền muốn chuyển --\n');
    moneyTransferred = +app('\n-- Nhập vào số tiền muốn chuyển -- :\n');
    if (customer.money > moneyTransferred) {
      flag = true;
    }
  }
  return { moneyTransferred, flag };
}

function findNameLogin(nameLogin: any, flag: boolean, id: number) {
  admin.listUser.forEach((element, index) => {
    if (element.user == nameLogin) {
      flag = true;
      id = index;
    }
  });
  return { flag, id };
}

function calcInterest(app: any, customer: any) {
  let tSDay = app('\n-- Nhập vào tổng ngày gửi tiền -- :\n');
  console.log('Tổng lãi quý khách nhận được là : ' + customer.calcInterest(tSDay));
  addMessageHistory(customer,'Tính lãi', customer.calcInterest(tSDay));

}

function changePass(app: any, customer: any) {
  let oldPass = app('\n-- Nhập vào mật khẩu cũ -- :\n');
  let flag = true;
  if (oldPass != customer.pass) {
    flag = false;
  }
  ({ flag, oldPass } = isPass(flag, oldPass, app, customer));
  let newPass = app('\n-- Nhập vào mật khẩu mới -- :\n');
  let newPassMore = app('\n-- Nhập vào mật khẩu mới -- :\n');
  if (newPass != newPassMore) {
    flag = false;
  }
  ({ flag, newPassMore } = isNewPassMore(flag, newPassMore, app, newPass));
  customer.pass = newPass;
}

function isPass(flag: boolean, oldPass: any, app: any, customer: any) {
  while (!flag) {
    console.log('\n-- Mật khẩu không chính xác --\n');
    oldPass = app('\n-- Nhập vào mật khẩu cũ -- :\n');
    if (oldPass == customer.pass) {
      flag = true;
    }
  }
  return { flag, oldPass };
}

function isNewPassMore(flag: boolean, newPassMore: any, app: any, newPass: any) {
  while (!flag) {
    console.log('\n-- Mật khẩu không chính xác --\n');
    newPassMore = app('\n-- Nhập lại mật khẩu mới -- :\n');
    if (newPass == newPassMore) {
      flag = true;
    }
  }
  return { flag, newPassMore };
}

function getMoney(app: any, customer: any) {
  let money = +app('\n-- Nhập vào số tiền muốn rút -- :\n');
  let input = 'Rút tiền mặt' ;
  if (customer.money < money) {
    console.log('\n-- Số tiền vứt quá hạn mức tín dụng , vui lòng thao tác lại --\n');
  } else {
    customer.getMoney(money);
    console.log('\n-- Rút tiền thành công --\n');
  }
  addMessageHistory(customer.getUser(),input, -money);
}

function showInfoCustomer(customer: any) {
  let infoCustomer = {
    name: customer.name,
    age: customer.age,
    phone: customer.phone,
    email: customer.email,
    surplus: customer.money,
  };
  let showInfo = [];
  showInfo.push(infoCustomer);
  console.table(showInfo);
}
