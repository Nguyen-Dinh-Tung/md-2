"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
var listNew = [];
stack.add('123');
stack.add('123');
stack.add('as');
stack.add('12xzzx3');
stack.add('cxc');
console.log(stack.list);
for (var i = stack.list.length; i > 0; i--) {
    listNew.push(stack.remove());
}
console.log(listNew);
