var Viettel;
(function (Viettel) {
    Viettel["value"] = "0977";
    Viettel["value2"] = "0971";
    Viettel["value3"] = "0883";
})(Viettel || (Viettel = {}));
var arr = ['088388887', '0971800103', '0977719684', '09719292929', '088327277272'];
var arr0977 = [];
var arr0971 = [];
var arr0883 = [];
for (var i = 0; i < arr.length; i++) {
    var numberFirt = '';
    for (var j = 0; j < 4; j++) {
        numberFirt += arr[i][j];
    }
    if (Viettel.value == numberFirt) {
        arr0977.push(arr[i]);
    }
    else if (Viettel.value2 == numberFirt) {
        arr0971.push(arr[i]);
    }
    else if (Viettel.value3 == numberFirt) {
        arr0883.push(arr[i]);
    }
}
console.log(arr0977);
console.log(arr0971);
console.log(arr0883);
