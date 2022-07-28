"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionExtra = void 0;
const Constant_1 = require("../class/Constant");
const menu_1 = require("./menu");
function questionExtra(choice, app, Constant) {
    do {
        console.log('\n-- Dịch vụ mở rộng --\n');
        (0, menu_1.menuCustomerExtra)();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case Constant_1.CstCustomerExtra.OPTION_INSURANCE:
                console.log('1.-- Chọn loại bảo hiểm --\n');
                break;
            case Constant_1.CstCustomerExtra.OPTION_EXIST:
                console.log('\n-- Chào tạm biệt --\n');
                break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != Constant_1.CstCustomerExtra.OPTION_EXIST);
}
exports.questionExtra = questionExtra;
