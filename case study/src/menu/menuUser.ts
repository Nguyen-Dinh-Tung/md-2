import { User } from './../class/User';
import { menuCustomer } from "./menu";

export function questionCustomer(choice: any ,app: any ,CstCustomer: any,customer: any){
  do{

    console.log('\n-- Xin chào --\n')
    menuCustomer()
    choice = +app('\nNhập lựa chọn của bạn : ')
    switch(choice){
      case CstCustomer.OPTION_RENDER_INFO_CUSTOMER:
        let infoCustomer = {
          name: customer.name,
          age: customer.age,
          phone: customer.phone,
          email: customer.email,
          surplus : customer.money,
        }
        let showInfo = [] ;
        showInfo.push(infoCustomer)
        console.table(showInfo)
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