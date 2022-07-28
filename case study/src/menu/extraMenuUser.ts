import { admin } from './../class/Admin';
import { CstCustomerExtra, CstCustomerInsura, CstCustomerInsuraPay, CstCustomerInsuraPrice } from "../class/Constant"
import { insuranceMenu, menuCustomerExtra } from "./menu"
import {  addMessageHistoryAdmin } from '../handle/addHistory';

export function questionExtra(choice: any ,app: any ,customer: any){
  do{
    console.log('\n-- Dịch vụ mở rộng --\n')
    menuCustomerExtra()
    choice = +app('\nNhập lựa chọn của bạn : ')
    switch(choice){

      case CstCustomerExtra.OPTION_INSURANCE:
        console.log('1.-- Chọn loại bảo hiểm --\n');
        insuranceMenu() ;
        payOne(app, customer);
      break ;
      // case CstCustomerExtra.OPTION_INSURANCE:
      //   console.log('3.-- Thanh toán tiền nước --\n');

      //   break ;
      // case CstCustomerExtra.OPTION_INSURANCE:
      //   console.log('4.-- Thanh toán tiền học --\n');

      //     break ;


      case CstCustomerExtra.OPTION_EXIST:
        console.log('\n-- Chào tạm biệt --\n')
        break;

      default :
      console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --')
        break;

    }
  }while(choice != CstCustomerExtra.OPTION_EXIST)

}
function payElectric(app: any, customer: any) {
  let selector = inputSelector(app);

  if (selector == CstCustomerInsura.OPTION_ONE) {
    console.log('\n-- Thanh toán tiền điện --\n');
    let selection = app('\n-- Nhập vào yes hoặc no -- :\n');
    switch (selection) {
      case CstCustomerInsuraPay.OPTION_YES_INSURACE:
        let id = findIdCustomer(customer);

        break;
      case CstCustomerInsuraPay.OPTION_NO_INSURACE:
        console.log('\n-- Thanh toán thất bại  --\n');
        break;
    }
  }
}


function payOne(app: any, customer: any) {
  let selector = inputSelector(app);

  if (selector == CstCustomerInsura.OPTION_ONE) {
    console.log('\n-- Bạn có chắc mua bảo hiểm y tế --\n');
    let selection = app('\n-- Nhập vào yes hoặc no -- :\n');
    switch (selection) {
      case CstCustomerInsuraPay.OPTION_YES_INSURACE:
        let id = findIdCustomer(customer);
        payInsuranceOne(customer, id);
        break;
      case CstCustomerInsuraPay.OPTION_NO_INSURACE:
        console.log('\n-- Thanh toán thất bại , quý khách vui lòng chọn dịch vụ khác --\n');
        break;
    }
  }else if(selector == CstCustomerInsura.OPTION_TWO) {
    console.log('\n-- Bạn có chắc mua bảo hiểm y tế --\n');
    let selection = app('\n-- Nhập vào yes hoặc no -- :\n');
    switch (selection) {
      case CstCustomerInsuraPay.OPTION_YES_INSURACE:
        let id = findIdCustomer(customer);
        payInsuranceTwo(customer, id);
        break;
      case CstCustomerInsuraPay.OPTION_NO_INSURACE:
        console.log('\n-- Thanh toán thất bại , quý khách vui lòng chọn dịch vụ khác --\n');
        break;
    }
  }else if(selector == CstCustomerInsura.OPTION_THREE) {
    console.log('\n-- Bạn có chắc mua bảo hiểm y tế --\n');
    let selection = app('\n-- Nhập vào yes hoặc no -- :\n');
    switch (selection) {
      case CstCustomerInsuraPay.OPTION_YES_INSURACE:
        let id = findIdCustomer(customer);
        payInsuranceThree(customer, id);
        break;
      case CstCustomerInsuraPay.OPTION_NO_INSURACE:
        console.log('\n-- Thanh toán thất bại , quý khách vui lòng chọn dịch vụ khác --\n');
        break;
    }
  }
}

function findIdCustomer(customer: any) {
  let id = -1;
  admin.listUser.forEach((element, index) => {
    if (element.name == customer.name) {
      id = index;
    }
  });
  return id;
}

function payInsuranceOne(customer: any, id: number) {
  if (customer.money < CstCustomerInsuraPrice.OPTION_ONE_INSURACE) {
    console.log('\n-- Số tiền trong tài khoản của quý khách không đủ để thực hiện giao dịch --\n');
  } else {
    admin.listUser[id].getMoney(CstCustomerInsuraPrice.OPTION_ONE_INSURACE);
    addMessageHistoryAdmin(customer.getUser(), 'Mua bảo hiểm', CstCustomerInsuraPrice.OPTION_ONE_INSURACE);
  }
}
function payInsuranceTwo(customer: any, id: number) {
  if (customer.money < CstCustomerInsuraPrice.OPTION_TWO_INSURACE) {
    console.log('\n-- Số tiền trong tài khoản của quý khách không đủ để thực hiện giao dịch --\n');
  } else {
    admin.listUser[id].getMoney(CstCustomerInsuraPrice.OPTION_TWO_INSURACE);
    addMessageHistoryAdmin(customer.getUser(), 'Mua bảo hiểm', CstCustomerInsuraPrice.OPTION_TWO_INSURACE);
  }
}
function payInsuranceThree(customer: any, id: number) {
  if (customer.money < CstCustomerInsuraPrice.OPTION_THREE_INSURACE) {
    console.log('\n-- Số tiền trong tài khoản của quý khách không đủ để thực hiện giao dịch --\n');
  } else {
    admin.listUser[id].getMoney(CstCustomerInsuraPrice.OPTION_THREE_INSURACE);
    addMessageHistoryAdmin(customer.getUser(), 'Mua bảo hiểm', CstCustomerInsuraPrice.OPTION_THREE_INSURACE);
  }
}


function inputSelector(app: any) {
  let selector = +app('\n-- Nhập lựa chọn của bạn -- :\n');
  let flag = false;
  if (selector >= CstCustomerInsura.OPTION_ONE && selector <= CstCustomerInsura.OPTION_THREE) {
    flag = true;
  }
  while (!flag) {
    console.log('\n-- Vui lòng nhập lại lựa chọn --\n');
    selector = +app('\n-- Nhập lựa chọn của bạn -- :\n');
    if (selector >= CstCustomerInsura.OPTION_ONE && selector <= CstCustomerInsura.OPTION_THREE) {
      flag = true;
    }
  }
  return selector;
}