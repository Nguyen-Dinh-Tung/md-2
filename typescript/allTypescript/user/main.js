"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var it = new User_1.User('Tung', 's30.Tung@gmail', User_1.Role.user);
it.setAdmin(User_1.Role.admin);
it.setEmail('30300');
it.setName('check');
console.log(it);
