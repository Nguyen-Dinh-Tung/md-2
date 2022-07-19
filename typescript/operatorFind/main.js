function find(data) {
    var i = 1;
    var arr = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
var data = [1, 2, 55, 2, 3, 5, 222];
find(data);
