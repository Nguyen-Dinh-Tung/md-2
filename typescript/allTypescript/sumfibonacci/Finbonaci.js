var arr = [0, 1];
var n = 10;
var finbonaci = 0;
var total = 0;
function findFinbonaci(n, arr) {
    for (var i = 0; i < n; i++) {
        finbonaci = arr[i] + arr[i + 1];
        arr.push(finbonaci);
    }
}
findFinbonaci(n, arr);
function sum(total, arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        total += value;
    }
    return total;
}
console.log(sum(total, arr));
