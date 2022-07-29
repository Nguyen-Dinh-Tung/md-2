export let PRICEELECTRIC = 3000 ;
export let interest = 0.0013 ;

export enum CustomerInsuraPrice{
  OPTION_PAY_ONE = 100000 ,
  OPTION_PAY_TWO = 500000 ,
  OPTION_PAY_THREE = 1200000 ,
  OPTION_EXIST = 0,
}
export enum CustomerInsuraPay {
  OPTION_ONE = 1 ,
  OPTION_TWO = 2 ,
  OPTION_THREE = 3 ,
  OPTION_EXIST = 0,
}

export enum CstCustomer{
  OPTION_RENDER_INFOR = 1,
  OPTION_GET_MONEY = 2,
  OPTION_TRANSFERS = 3,
  OPTION_CHANGE_PASS= 4,
  OPTION_CACULATOR_INTERES = 5,
  OPTION_MORE_SEVIRCE = 6,
  OPTION_SHOW_HISTORY = 7,
  OPTION_EXIST = 0,

}

export enum CstAdmin{
  OPTION_CREATE_CUSTOMER = 1,
  OPTION_RENDER_LIST_CUSTOMER = 2,
  OPTION_DELETE_CUSTOMER = 3,
  OPTION_EDIT_CUSTOMER = 4,
  OPTION_UPDATE_SURPLUS = 5,
  OPTION_WITH_DRAW = 6,
  OPTION_FIND_CUSTOMER = 7,
  OPTION_SORT_CUSTOMER = 8,
  OPTION_RENDER_HISTORY = 9,
  OPTION_EXIST = 0,


}
export enum CstAdminExtra{
  OPTION_EDIT_NAME = 1,
  OPTION_EDIT_PHONE = 2,
  OPTION_EDIT_AGE = 3,
  OPTION_EDIT_EMAIL = 4,
  OPTION_EDIT_IDCARD = 5,
  OPTION_EDIT_PASS = 6,
  OPTION_EXIST = 0,
}

export enum CstMenuMain{
  OPTION_LOGIN_ADMIN = 1,
  OPTION_LOGIN_CUSTOMER = 2,
  OPTION_EXIST = 0,

}
export const CstOutMoney = 'Rút tiền mặt' ;
export const percentOneMonth = 0.0013 ;
export const percentForMonth = 0.0023 ;
export const percentOneYear = 0.0033 ;
export const insuraOne = 'Bảo hiểm y tế';
export const insuraTwo = 'Bảo hiểm nhân thọ';
export const insuraThree = 'Bảo hiểm y tế';
