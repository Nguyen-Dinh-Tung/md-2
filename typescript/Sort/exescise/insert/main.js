function selection(arr) {
    for (var i = 1; i < arr.length; i++) {
        var cMin = arr[i];
        var cIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (cMin > arr[j]) {
                cMin = arr[j];
                cIndex = j;
            }
        }
        if (cIndex != i) {
            arr[cIndex] = arr[i];
            arr[i] = cMin;
        }
    }
    console.log(arr);
}
var arr = [2, 3, 5, 2, 2, 3, 3, 333, 452, 566];
selection(arr);
