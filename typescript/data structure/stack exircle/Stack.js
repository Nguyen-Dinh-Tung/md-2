"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.list = [];
    }
    Stack.prototype.add = function (value) {
        this.list.push(value);
    };
    Stack.prototype.remove = function () {
        var value = this.list.pop();
        return value;
    };
    return Stack;
}());
exports.Stack = Stack;
