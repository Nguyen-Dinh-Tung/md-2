"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectricBill = void 0;
const Constant_1 = require("./Constant");
class ElectricBill {
    constructor() {
        this.listBill = [];
    }
    showListBill() {
        console.table(this.listBill);
    }
    addBillCustomer(customer, oldElectricNumber, newElectricNumber) {
        let infoBillCustomer = this.addInfoCustomer(customer, oldElectricNumber, newElectricNumber);
        this.listBill.push(infoBillCustomer);
    }
    addInfoCustomer(customer, oldElectricNumber, newElectricNumber) {
        return {
            name: customer.name,
            numberHouse: customer.numberHouse,
            houseCode: customer.houseCode,
            oldElectricNumber: oldElectricNumber,
            newElectricNumber: newElectricNumber,
            numberElectricUsed: this.handleUsedElectric(newElectricNumber, oldElectricNumber)
        };
    }
    deleteCustomer(index) {
        this.listBill.splice(index, 1);
    }
    editCustomer(index, customer) {
        this.listBill[index].name = customer.name;
        this.listBill[index].numberHouse = customer.numberHouse;
        this.listBill[index].houseCode = customer.houseCode;
    }
    payElectric(index) {
        let moneyMustPay = this.listBill[index].numberElectricUsed * Constant_1.PRICEELECTRIC;
        console.table(moneyMustPay);
    }
    updateNewNumberElectric(index, number) {
        let flag = false;
        if (number > this.listBill[index].newElectricNumber) {
            this.listBill[index].oldElectricNumber = this.listBill[index].newElectricNumber;
            this.listBill[index].newElectricNumber = number;
            this.listBill[index].numberElectricUsed =
                this.listBill[index].newElectricNumber - this.listBill[index].oldElectricNumber;
            flag = true;
        }
        return flag;
    }
    handleUsedElectric(newElectricNumber, oldElectricNumber) {
        let numberElectricUsed = 0;
        if (newElectricNumber != 0) {
            numberElectricUsed = newElectricNumber - oldElectricNumber;
        }
        else {
            newElectricNumber = 0;
        }
        return numberElectricUsed;
    }
}
exports.ElectricBill = ElectricBill;
