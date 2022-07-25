"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMessageHistoryAdmin = exports.addMessageHistory = void 0;
const History_1 = require("./History");
function addMessageHistory(customer, nameLogin, moneyTransferred) {
    History_1.history.setTransfersHistory(customer.name, nameLogin, moneyTransferred);
}
exports.addMessageHistory = addMessageHistory;
function addMessageHistoryAdmin(admin, nameLogin, moneyTransferred) {
    History_1.history.setTransferAdmin(admin, nameLogin, moneyTransferred);
}
exports.addMessageHistoryAdmin = addMessageHistoryAdmin;
// export function addMessageHistoryAdmin(history : any,admin: any ,customer: any, nameLogin: any, moneyTransferred: number) {
//   history.setTransfersHistory(customer.name,nameLogin, moneyTransferred);
// }
