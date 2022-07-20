"use strict";
exports.__esModule = true;
exports.BubbleSort = void 0;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.prototype.sort = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
        }
        console.log(arr);
    };
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
