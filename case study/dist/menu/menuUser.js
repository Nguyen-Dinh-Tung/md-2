"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionCustomer = void 0;
const menu_1 = require("./menu");
function questionCustomer(choice, app, CstCustomer, customer) {
    do {
        console.log('\n-- Xin chào --\n');
        (0, menu_1.menuCustomer)();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case CstCustomer.OPTION_RENDER_INFO_CUSTOMER:
                let infoCustomer = {
                    name: customer.name,
                    age: customer.age,
                    phone: customer.phone,
                    email: customer.email,
                    surplus: customer.money,
                };
                let showInfo = [];
                showInfo.push(infoCustomer);
                console.table(showInfo);
                break;
            case CstCustomer.OPTION_EXIST:
                console.log('\n-- Chào tạm biệt --\n');
                break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != CstCustomer.OPTION_EXIST);
}
exports.questionCustomer = questionCustomer;
