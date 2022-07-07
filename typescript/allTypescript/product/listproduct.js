"use strict";
exports.__esModule = true;
exports.Listproduct = void 0;
var Listproduct = /** @class */ (function () {
    function Listproduct() {
        this.listProducts = [];
    }
    Listproduct.prototype.getAll = function () {
        return this.listProducts;
    };
    Listproduct.prototype.setAddProduct = function (product) {
        this.listProducts.push(product);
    };
    return Listproduct;
}());
exports.Listproduct = Listproduct;
