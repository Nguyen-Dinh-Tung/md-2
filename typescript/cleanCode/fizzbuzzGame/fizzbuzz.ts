export class FizzBuzz {
  message: string;
  isFizz : boolean ;
  isBuzz : boolean ;
  constructor(n: number) {
    this.isBuzz = (n % 5 == 0)
    this.isFizz = (n % 3 == 0)
  }
  getIsFizzBuzz(){
    if (this.isBuzz && this.isFizz) {
          this.message = 'FizzBuzz';
      } else if (this.isBuzz) {
          this.message = 'Fizz';
      } else if(this.isFizz) {
          this.message = 'Buzz';
      }
  }
  printMessage(){
    console.log(this.message)
  }
}