"use strict";
exports.__esModule = true;
exports.Bubble = void 0;
var Bubble = /** @class */ (function () {
    function Bubble() {
    }
    Bubble.bubbleSort = function (list) {
        var needNextPass = true;
        for (var k = 1; k < list.length; k++) {
            needNextPass = false;
            for (var i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    console.log("swap " + list[i] + ' width ' + list[i + 1]);
                    var temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                    needNextPass = true;
                }
            }
            if (needNextPass == false) {
                console.log("Array may be sorted and next pass not needed");
                break;
            }
            console.log("List after the  " + k + "' sort: ");
            for (var j = 0; j < list.length; j++) {
                console.log(list[j] + "\t");
            }
            console.log();
        }
    };
    Bubble.numbers = [2, 3, 52, 3, 2, 3, 563, 4, 65];
    return Bubble;
}());
exports.Bubble = Bubble;
