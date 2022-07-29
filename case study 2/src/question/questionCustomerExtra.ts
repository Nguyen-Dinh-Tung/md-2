import { admin } from "../class/Admin";
import { CustomerInsuraPay, CustomerInsuraPrice, insuraOne } from "../class/Constant";
import { menuUserExtra } from "../menu/menu";
import { failHandle, successHandle } from "./questionAdmin";

export function questionCustomerExtra(choice : any,app : any, customer : any){
  console.log('\n-- Dịch vụ mua bảo hiểm --\n')

  do{
    menuUserExtra() ;
    choice = +app('\n-- Nhập lựa chọn của bạn -- :\n')
    switch(choice){
      case CustomerInsuraPay.OPTION_ONE :
        insuranceOne(customer);

      break;
      case CustomerInsuraPay.OPTION_TWO :
        insuranceTwo(customer);

      break;
      case CustomerInsuraPay.OPTION_THREE :
        insuranceThree(customer);

      break;

      case CustomerInsuraPay.OPTION_EXIST :
        console.log('\n-- Cảm ơn quý khách đã sử dụng dịch vụ --\n')
        break
    }
  }while(choice != CustomerInsuraPay.OPTION_EXIST)
}

function insuranceThree(customer: any) {
  if (customer.getSurplus() > CustomerInsuraPrice.OPTION_PAY_THREE) {

    customer.setDownSurplus(CustomerInsuraPrice.OPTION_PAY_THREE);
    admin.createNewHistory(customer.getUser(), insuraOne, CustomerInsuraPrice.OPTION_PAY_THREE);
    successHandle();
  } else {
    failHandle();
  }
}

function insuranceTwo(customer: any) {
  if (customer.getSurplus() > CustomerInsuraPrice.OPTION_PAY_TWO) {

    customer.setDownSurplus(CustomerInsuraPrice.OPTION_PAY_TWO);
    admin.createNewHistory(customer.getUser(), insuraOne, CustomerInsuraPrice.OPTION_PAY_TWO);
    successHandle();
  } else {
    failHandle();
  }
}

function insuranceOne(customer: any) {
  if (customer.getSurplus() > CustomerInsuraPrice.OPTION_PAY_ONE) {

    customer.setDownSurplus(CustomerInsuraPrice.OPTION_PAY_ONE);
    admin.createNewHistory(customer.getUser(), insuraOne, CustomerInsuraPrice.OPTION_PAY_ONE);
    successHandle();
  } else {
    failHandle();
  }
}

