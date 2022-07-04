// const a = ["BWM", "MEC", "Lexus"];
// const b = [...a, "Toyota"];
// const c = [...b, "Nissan"];
// console.log(a);
// console.log(b);
// console.log(c);
// const ob = {
//   name: "Tùng Phich",
//   age: 24,
// };
// const ob2 = { ...ob, address: "Thanh Hoa" };
// console.log(ob2);
// const ob3 = { ...ob, ...ob2 };
// console.log(ob3);
// const char = "Abcd213";
// const b = [...char];
// console.log(b);
// let arr = [1, 23, 5, 23, 5, 6, 7];
// const [a, b, c, d, ...other] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(other);
const ob = {
  name: "Tung Phich",
  id: 1,
};
const ob2 = {
  age: 24,
  class: "c2205i1",
};
const ob3 = { ...ob, ...ob2 };
console.log(ob3);
