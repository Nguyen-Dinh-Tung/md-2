"use strict";
exports.__esModule = true;
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getArea = function (radius) {
        return radius * radius * Math.PI;
    };
    Cylinder.getPerimeter = function (radius) {
        return 2 * radius * Math.PI;
    };
    Cylinder.getVolume = function (radius, height) {
        var baseArea = this.getArea(radius);
        var perimeter = this.getPerimeter(radius);
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
