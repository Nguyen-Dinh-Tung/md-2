"use strict";
exports.__esModule = true;
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, priority) {
        this.name = name;
        this.priority = priority;
    }
    Patient.prototype.renderPatient = function () {
        return {
            name: this.name,
            priority: this.priority
        };
    };
    return Patient;
}());
exports.Patient = Patient;
