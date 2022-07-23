"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionMain = void 0;
function questionMain(choice, menu, app, CstMenuMain) {
    do {
        console.log('\n-- Ngân hàng sấp tới nơi chào bạn --\n');
        menu();
        choice = +app('\nNhập lựa chọn của bạn : ');
        switch (choice) {
            case CstMenuMain.OPTION_LOGIN_ADMIN:
                console.log('\n-- Đăng nhập admin --\n');
                break;
            case CstMenuMain.OPTION_EXIST:
                console.log('\n-- Chào tạm biệt --\n');
                break;
            default:
                console.log('\n*** ERORR Chú ý bạn đã nhập sau yêu cầu\n --');
                break;
        }
    } while (choice != CstMenuMain.OPTION_EXIST);
}
exports.questionMain = questionMain;
