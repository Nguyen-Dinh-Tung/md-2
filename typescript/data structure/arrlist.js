"use strict";
exports.__esModule = true;
exports.ArrayList = void 0;
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.container = [];
    }
    ArrayList.prototype.add = function (data) {
        this.container.push(data);
    };
    ArrayList.prototype.get = function (index) {
        return this.container[index];
    };
    ArrayList.prototype.size = function () {
        return 0;
    };
    ArrayList.prototype.remove = function () {
        this.container.pop();
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
