"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
const getTime_1 = require("../extra/getTime");
class History {
    constructor(sender, receiver, amountOfMoney) {
        this.sender = sender;
        this.receiver = receiver;
        this.amountOfMoney = amountOfMoney;
        this.time = (0, getTime_1.getTime)();
    }
    getSender() {
        return this.sender;
    }
    getReceiver() {
        return this.receiver;
    }
}
exports.History = History;
