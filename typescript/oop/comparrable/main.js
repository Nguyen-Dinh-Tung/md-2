"use strict";
exports.__esModule = true;
var ComparableCircle_1 = require("./ComparableCircle ");
var circles = [];
circles[0] = new ComparableCircle_1.ComparableCircle(10);
circles[1] = new ComparableCircle_1.ComparableCircle(123);
circles[2] = new ComparableCircle_1.ComparableCircle(33);
circles[3] = new ComparableCircle_1.ComparableCircle(65);
var result = circles[1].compareTo(circles[2]);
console.log(circles[3].getRadius());