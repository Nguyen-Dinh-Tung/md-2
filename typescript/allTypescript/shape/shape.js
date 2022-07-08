"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getInfo = function () {
        return 'Color: ' + this.color + ' Filled : ' + this.filled;
    };
    Shape.prototype.getColor = function () {
        return 'Color: ' + this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Shape.prototype.setFilled = function (value) {
        this.filled = value;
    };
    return Shape;
}());
exports.Shape = Shape;
