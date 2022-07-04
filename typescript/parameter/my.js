// let mul = (a, b) => {
//   return a * b;
// };
// console.log(mul(2, 5));
// let mul = (a, b = 5) => {
//   return a * b;
// };
// let mul1 = mul(5);
// console.log(mul1);
// let mul2 = mul(5, 3);
// console.log(mul2);
class Sum {
  constructor(a, b = 2) {
    this.a = a;
    this.b = b;
  }
  getResult() {
    return this.a + this.b;
  }
}
let sum = new Sum(5, 1);
console.log(sum.getResult());
