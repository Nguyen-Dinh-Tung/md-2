export class Calculator {
  static readonly plus = '+'
  static readonly sub = '-'
  static readonly multiphi = '*'
  static readonly division = '/'
  public firstOperator : number ;
  public lastOperator : number ;
  public static calculate(firstOperator: number, lastOperator: number, operator: string): number {
      switch (operator) {
          case this.plus:
              return firstOperator + lastOperator;
          case this.sub:
              return firstOperator - lastOperator;
          case this.multiphi:
              return firstOperator * lastOperator;
          case this.division:
              if (lastOperator != 0)
                  return firstOperator / lastOperator;
              else
                  console.log("Can not divide by 0");
          default:
              console.log("Unsupported operation");
      }
  }
}