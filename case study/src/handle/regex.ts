export function isEmail( emailInput: string ){
  let email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ;
  let flag = false ;
  if(email.test(emailInput) == true){
    flag = true ;
  }
  return flag ;
}
export function isPhoneNumber(numberInput: string ){
  let number = /((09|03|07|08|05)+([0-9]{8})\b)/ ;
  let flag = false ;
  if(number.test(numberInput) == true){
    flag = true ;
  }
  return flag ;
}
export function isIdCard( idCardInput: string){
  let email = /(([0-9]{12})\b)/  ;
  let flag = false ;
  if(email.test(idCardInput) == true){
    flag = true ;
  }
  return flag ;
}
export function isRegisterPass(value: string){
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let flag = false

  if(regex.test(value) == true){
    flag = true ;
  }
  return flag ;
}
export function isRegisterUser(value: string){
  let regex = /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{7,19}$/;
  let flag = false
  if(regex.test(value) == true){
    flag = true ;
  }
  return flag;
}