"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return 'Bán kính' + this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.toString = function () {
        return 'A cirle with radius = ' + this.getRadius();
    };
    return Circle;
}());
exports.Circle = Circle;
