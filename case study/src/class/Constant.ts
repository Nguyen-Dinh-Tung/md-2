import { Admin } from './Admin';

export let PRICEELECTRIC = 3000 ;
export let interest = 0.0013 ;

export enum CstCustomer{
  OPTION_EXIST = 0 ,
  OPTION_RENDER_INFO_CUSTOMER = 1,
  OPTION_GET_MONEY = 2,
  OPTION_EDIT_PASS = 3,
  OPTION_CALC_INTEREST = 4,
  OPTION_TRANSFERS = 5,
  OPTION_TRANSFERS_HISTORY = 6,

}

export enum CstAdmin{
  OPTION_EXIST = 0 ,
  OPTION_RENDER_LIST_CUSTOMER = 1,
  OPTION_CREATE_CUSTOMER = 2,
  OPTION_DELETE_CUSTOMER = 3,
  OPTION_EDIT_CUSTOMER = 4,
  OPTION_UPDATE_MONEY = 5,
  OPTION_GET_MONEY = 6,
  OPTION_SORT_CUSTOMER = 7,
  OPTION_TRANSFERS_HISTORY = 8,

}
export enum CstAdminEdit{
  OPTION_EXIST = 0 ,
  OPTION_EDIT_NAME = 1,
  OPTION_EDIT_AGE = 2,
  OPTION_EDIT_EMAIL = 3,
  OPTION_EDIT_PHONE = 4,
  OPTION_EDIT_IDCARD = 5,
  OPTION_EDIT_PASS = 6,
  OPTION_EDIT_USER = 7,


}

export enum CstMenuMain{
  OPTION_EXIST = 0 ,
  OPTION_LOGIN_ADMIN = 1,
  OPTION_LOGIN_CUSTOMER = 2,
  // OPTION_DELETE_CUSTOMER = 3,
  // OPTION_EDIT_CUSTOMER = 4,
  // OPTION_PAY_BILL = 5,
  // OPTION_UPDATE_AMOUNT_ELECTRIC = 6,

}
export function getTime(): any{
  let date = new Date() ;
  let newDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}` ;
  return newDate
}
