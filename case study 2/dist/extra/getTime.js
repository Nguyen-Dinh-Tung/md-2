"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
function getTime() {
    let date = new Date();
    let newDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return newDate;
}
exports.getTime = getTime;
