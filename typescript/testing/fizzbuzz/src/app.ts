import { Constant } from "./Constant";
export class FizzBuzz{

  message : string = '' ;

  isNumberFizzBuzz(number: number){

    if(number > 0){
      this.isFizz(number)
      this.isBuzz(number)
      this.isFizzBuzz(number)
    }else{
      this.message = Constant.defaultNumber ;
    }
    return this.message ;
  }

  isFizz(number: number){
    if(number % 3 == 0){
      this.message = Constant.Fizz ;
    }
  }

  isBuzz(number: number){
    if(number % 5 == 0){
      this.message = Constant.Buzz ;
    }
  }

  isFizzBuzz(number: number){
    if(number % 5 == 0 && number % 3 == 0){
      this.message = Constant.FizzBuzz ;
    }
  }
}