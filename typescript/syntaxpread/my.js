// function sum(a, b, c) {
//   return a + b + c;
// }
// const number = [1, 2, 3, 5];
// console.log(sum(...number));
// let a = [1, 2, 3, 5];
// let b = [6, 7];
// let c = [...a, ...b];
// console.log(c);
const ob = {
  a: 1,
  b: 2,
};
const ob2 = {
  c: 3,
};
const ob3 = { ...ob, ...ob2, d: 123 };
console.log(ob3);
