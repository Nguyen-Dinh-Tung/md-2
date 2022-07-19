function findBinary(data, needle) {
    var left = 0;
    var right = data.length - 1;
    var result = -1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (needle == data[mid]) {
            result = mid;
        }
        else if (data[mid] > needle) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return result;
}
var data = [1, 2, 3, 5, 55, 77, 1001];
var needle = 3;
console.log(findBinary(data, needle));
