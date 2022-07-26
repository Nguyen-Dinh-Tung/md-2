"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.history = exports.History = void 0;
const Constant_1 = require("../class/Constant");
const TransfersHistory_1 = require("../class/TransfersHistory");
class History {
    constructor() {
        this.listHistoryCustomer = [];
        this.listHistoryAdmin = [];
    }
    setTransfersHistory(nameTransfers, nameTake, money) {
        let newHistory = new TransfersHistory_1.TransfersHistory(nameTransfers, nameTake, money, (0, Constant_1.getTime)());
        this.listHistoryCustomer.push(newHistory);
        this.listHistoryAdmin.push(newHistory);
    }
    setTransferAdmin(nameTransfers, nameTake, money) {
        let newHistory = new TransfersHistory_1.TransfersHistory(nameTransfers, nameTake, money, (0, Constant_1.getTime)());
        this.listHistoryAdmin.push(newHistory);
    }
    getListHistoryCustomer(userLogin) {
        let messageHistory = [];
        this.listHistoryAdmin.forEach(element => {
            if (element.getName() == userLogin || element.getNameTake() == userLogin) {
                messageHistory.push(element);
            }
        });
        return messageHistory;
    }
    getlistHistoryCustomer() {
        return this.listHistoryCustomer;
    }
    getListlistHistoryAdmin() {
        return this.listHistoryAdmin;
    }
}
exports.History = History;
exports.history = new History();
