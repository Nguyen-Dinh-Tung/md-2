"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(name, numberHouse, houseCode) {
        this.name = name;
        this.numberHouse = numberHouse;
        this.houseCode = houseCode;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getNumberHouse() {
        return this.numberHouse;
    }
    setNumberHouse(numberHouse) {
        this.numberHouse = numberHouse;
    }
    getHouseCode() {
        return this.houseCode;
    }
    setHouseCode(houseCode) {
        this.houseCode = houseCode;
    }
}
exports.default = Customer;
