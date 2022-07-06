var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(i);
}
var number = +prompt('Nhập số');
// console.log(arr)
// find element
function find(number) {
    var index = arr.indexOf(number);
    while (index == -1) {
        return number;
        index++;
    }
    return -1;
}
// push element
function pushElement(number, arr) {
    if (number != -1) {
        arr.push(number);
    }
}
pushElement(find(number), arr);
console.log(arr);
