function selection(arr) {
    for (var i = 0; i < arr.length; i++) {
        var cMax = arr[i];
        var cIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (cMax < arr[j]) {
                cMax = arr[j];
                cIndex = j;
            }
        }
        if (cIndex != i) {
            arr[cIndex] = arr[i];
            arr[i] = cMax;
        }
    }
    console.log(arr);
}
var arr2 = [2, 3, 5, 2, 2, 3, 3, 333, 452, 566];
selection(arr2);
