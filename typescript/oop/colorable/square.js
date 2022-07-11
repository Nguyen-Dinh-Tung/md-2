"use strict";
exports.__esModule = true;
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Square.prototype.howToColor = function () {
        return 'Color all four sides.';
    };
    return Square;
}());
exports.Square = Square;
