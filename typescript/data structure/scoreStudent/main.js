"use strict";
exports.__esModule = true;
var linkedList_1 = require("./linkedList");
var linkedList = new linkedList_1.LinkedList();
linkedList.insertFirstNode('Tung', 25);
linkedList.insertFirstNode('ád', 23);
linkedList.insertFirstNode('ádđ', 25);
linkedList.insertFirstNode('ttter', 68);
console.log(linkedList.readList());
