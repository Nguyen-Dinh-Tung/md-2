"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Patient_1 = require("./Patient");
var Queue = /** @class */ (function () {
    function Queue() {
        this.listPatient = [];
    }
    Queue.prototype.renderList = function () {
        console.log(this.listPatient);
        return;
    };
    Queue.prototype.addPatient = function (name, priority) {
        var newPatient = new Patient_1.Patient(name, priority);
        this.listPatient.push(newPatient.renderPatient());
    };
    Queue.prototype.dequeue = function () {
    };
    Queue.prototype.sortListPatientByPriority = function () {
        this.listPatient.sort(function (a, b) {
            return a.priority - b.priority;
        });
    };
    return Queue;
}());
exports.Queue = Queue;
