"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insuraThree = exports.insuraTwo = exports.insuraOne = exports.percentOneYear = exports.percentForMonth = exports.percentOneMonth = exports.CstOutMoney = exports.CstMenuMain = exports.CstAdminExtra = exports.CstAdmin = exports.CstCustomer = exports.CustomerInsuraPay = exports.CustomerInsuraPrice = exports.interest = exports.PRICEELECTRIC = void 0;
exports.PRICEELECTRIC = 3000;
exports.interest = 0.0013;
var CustomerInsuraPrice;
(function (CustomerInsuraPrice) {
    CustomerInsuraPrice[CustomerInsuraPrice["OPTION_PAY_ONE"] = 100000] = "OPTION_PAY_ONE";
    CustomerInsuraPrice[CustomerInsuraPrice["OPTION_PAY_TWO"] = 500000] = "OPTION_PAY_TWO";
    CustomerInsuraPrice[CustomerInsuraPrice["OPTION_PAY_THREE"] = 1200000] = "OPTION_PAY_THREE";
    CustomerInsuraPrice[CustomerInsuraPrice["OPTION_EXIST"] = 0] = "OPTION_EXIST";
})(CustomerInsuraPrice = exports.CustomerInsuraPrice || (exports.CustomerInsuraPrice = {}));
var CustomerInsuraPay;
(function (CustomerInsuraPay) {
    CustomerInsuraPay[CustomerInsuraPay["OPTION_ONE"] = 1] = "OPTION_ONE";
    CustomerInsuraPay[CustomerInsuraPay["OPTION_TWO"] = 2] = "OPTION_TWO";
    CustomerInsuraPay[CustomerInsuraPay["OPTION_THREE"] = 3] = "OPTION_THREE";
    CustomerInsuraPay[CustomerInsuraPay["OPTION_EXIST"] = 0] = "OPTION_EXIST";
})(CustomerInsuraPay = exports.CustomerInsuraPay || (exports.CustomerInsuraPay = {}));
var CstCustomer;
(function (CstCustomer) {
    CstCustomer[CstCustomer["OPTION_RENDER_INFOR"] = 1] = "OPTION_RENDER_INFOR";
    CstCustomer[CstCustomer["OPTION_GET_MONEY"] = 2] = "OPTION_GET_MONEY";
    CstCustomer[CstCustomer["OPTION_TRANSFERS"] = 3] = "OPTION_TRANSFERS";
    CstCustomer[CstCustomer["OPTION_CHANGE_PASS"] = 4] = "OPTION_CHANGE_PASS";
    CstCustomer[CstCustomer["OPTION_CACULATOR_INTERES"] = 5] = "OPTION_CACULATOR_INTERES";
    CstCustomer[CstCustomer["OPTION_MORE_SEVIRCE"] = 6] = "OPTION_MORE_SEVIRCE";
    CstCustomer[CstCustomer["OPTION_SHOW_HISTORY"] = 7] = "OPTION_SHOW_HISTORY";
    CstCustomer[CstCustomer["OPTION_EXIST"] = 0] = "OPTION_EXIST";
})(CstCustomer = exports.CstCustomer || (exports.CstCustomer = {}));
var CstAdmin;
(function (CstAdmin) {
    CstAdmin[CstAdmin["OPTION_CREATE_CUSTOMER"] = 1] = "OPTION_CREATE_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_RENDER_LIST_CUSTOMER"] = 2] = "OPTION_RENDER_LIST_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_DELETE_CUSTOMER"] = 3] = "OPTION_DELETE_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_EDIT_CUSTOMER"] = 4] = "OPTION_EDIT_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_UPDATE_SURPLUS"] = 5] = "OPTION_UPDATE_SURPLUS";
    CstAdmin[CstAdmin["OPTION_WITH_DRAW"] = 6] = "OPTION_WITH_DRAW";
    CstAdmin[CstAdmin["OPTION_FIND_CUSTOMER"] = 7] = "OPTION_FIND_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_SORT_CUSTOMER"] = 8] = "OPTION_SORT_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_RENDER_HISTORY"] = 9] = "OPTION_RENDER_HISTORY";
    CstAdmin[CstAdmin["OPTION_EXIST"] = 0] = "OPTION_EXIST";
})(CstAdmin = exports.CstAdmin || (exports.CstAdmin = {}));
var CstAdminExtra;
(function (CstAdminExtra) {
    CstAdminExtra[CstAdminExtra["OPTION_EDIT_NAME"] = 1] = "OPTION_EDIT_NAME";
    CstAdminExtra[CstAdminExtra["OPTION_EDIT_PHONE"] = 2] = "OPTION_EDIT_PHONE";
    CstAdminExtra[CstAdminExtra["OPTION_EDIT_AGE"] = 3] = "OPTION_EDIT_AGE";
    CstAdminExtra[CstAdminExtra["OPTION_EDIT_EMAIL"] = 4] = "OPTION_EDIT_EMAIL";
    CstAdminExtra[CstAdminExtra["OPTION_EDIT_IDCARD"] = 5] = "OPTION_EDIT_IDCARD";
    CstAdminExtra[CstAdminExtra["OPTION_EDIT_PASS"] = 6] = "OPTION_EDIT_PASS";
    CstAdminExtra[CstAdminExtra["OPTION_EXIST"] = 0] = "OPTION_EXIST";
})(CstAdminExtra = exports.CstAdminExtra || (exports.CstAdminExtra = {}));
var CstMenuMain;
(function (CstMenuMain) {
    CstMenuMain[CstMenuMain["OPTION_LOGIN_ADMIN"] = 1] = "OPTION_LOGIN_ADMIN";
    CstMenuMain[CstMenuMain["OPTION_LOGIN_CUSTOMER"] = 2] = "OPTION_LOGIN_CUSTOMER";
    CstMenuMain[CstMenuMain["OPTION_EXIST"] = 0] = "OPTION_EXIST";
})(CstMenuMain = exports.CstMenuMain || (exports.CstMenuMain = {}));
exports.CstOutMoney = 'Rút tiền mặt';
exports.percentOneMonth = 0.0013;
exports.percentForMonth = 0.0023;
exports.percentOneYear = 0.0033;
exports.insuraOne = 'Bảo hiểm y tế';
exports.insuraTwo = 'Bảo hiểm nhân thọ';
exports.insuraThree = 'Bảo hiểm y tế';
