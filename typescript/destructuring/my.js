// const arr = ["a", "b", "c", "d"];
// let [first, last] = arr;
// console.log(first, last);
// let [a, , b] = arr;
// console.log(a, b);
// let [a, b, ...other] = arr;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
// console.log(other);
// const ob = [1, 2, 3];
// let [a, b, c] = ob;
// console.log(a);
// console.log(b);
// console.log(c);
const ob = {
  s: {
    name: "Tung",
    age: 24,
  },
  s2: {
    name: "late",
    age: 26,
  },
};
const {
  s: { name: name1, age: age1 },
} = ob;
const ob1 = {
  name: name1,
  age: age1,
};
console.log(ob1);
