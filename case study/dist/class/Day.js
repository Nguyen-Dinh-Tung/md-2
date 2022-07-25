"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day = void 0;
class Day {
    constructor() {
        this.second = Day.get.getSeconds();
        this.minute = Day.get.getMinutes();
        this.hours = Day.get.getHours();
        this.day = Day.get.getDay();
        this.month = Day.get.getMonth();
        this.year = Day.get.getFullYear();
        Day.newDay = `${this.second}/${this.minute}/${this.hours}/${this.day}/${this.month}${this.year}`;
    }
}
exports.Day = Day;
