"use strict";
exports.__esModule = true;
var Queue_1 = require("./Queue");
var listPatient = new Queue_1.Queue();
listPatient.addPatient('Tung', 1);
listPatient.addPatient('ádasd', 3);
listPatient.addPatient('ádasd', 0);
listPatient.addPatient('x', 2);
listPatient.addPatient('x', 35);
listPatient.addPatient('x', 5);
listPatient.sortListPatientByPriority();
listPatient.renderList();
