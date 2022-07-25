"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransfersHistory = void 0;
class TransfersHistory {
    constructor(name, nameTake, amountMoney, date) {
        this.name = name;
        this.nameTake = nameTake;
        this.amountMoney = amountMoney;
        this.date = date;
    }
    getHistory() {
        return {
            name: this.name,
            money: this.amountMoney,
            date: this.date,
        };
    }
    getName() {
        return this.name;
    }
}
exports.TransfersHistory = TransfersHistory;
