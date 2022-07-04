let arr = [1, 2, 3, 5, 6];
let square = (item) => item * item;
function arrSq(funcm, arr) {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(funcm(element));
  });
  console.log(newArr);
}
console.log(arrSq(square, arr));
