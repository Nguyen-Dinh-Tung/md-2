"use strict";
exports.__esModule = true;
var my_1 = require("./my");
var listproduct_1 = require("./listproduct");
var a = new my_1.Product('Iphone ', 20000);
var b = new my_1.Product('laptop', 2002020);
var listproduct = new listproduct_1.Listproduct();
listproduct.setAddProduct(a);
listproduct.setAddProduct(b);
console.log(listproduct.getAll());