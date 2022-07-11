"use strict";
exports.__esModule = true;
var square_1 = require("./square");
var list = [];
list[0] = new square_1.Square(24, 'Blue');
list[1] = new square_1.Square(33, 'red');
list[2] = new square_1.Square(52, 'yellow');
list[3] = new square_1.Square(77, 'green');
console.log(list[0].howToColor());
