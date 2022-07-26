import { admin } from './../class/Admin';
import { history } from './History';

export function addMessageHistory(customer: any, nameLogin: any, moneyTransferred: number) {
  history.setTransfersHistory(customer,nameLogin, moneyTransferred);
}
export function addMessageHistoryAdmin(admin: any, nameLogin: any, moneyTransferred: number){
  history.setTransferAdmin(admin,nameLogin,moneyTransferred)
}
// export function addMessageHistoryAdmin(history : any,admin: any ,customer: any, nameLogin: any, moneyTransferred: number) {
//   history.setTransfersHistory(customer.name,nameLogin, moneyTransferred);
// }