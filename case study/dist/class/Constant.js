"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = exports.CstMenuMain = exports.CstAdminEdit = exports.CstAdmin = exports.CstCustomerInsuraPay = exports.CstCustomerPayElectric = exports.CstCustomerInsuraPrice = exports.CstCustomerInsura = exports.CstCustomerExtra = exports.CstCustomer = exports.interest = exports.PRICEELECTRIC = void 0;
exports.PRICEELECTRIC = 3000;
exports.interest = 0.0013;
var CstCustomer;
(function (CstCustomer) {
    CstCustomer[CstCustomer["OPTION_EXIST"] = 0] = "OPTION_EXIST";
    CstCustomer[CstCustomer["OPTION_RENDER_INFO_CUSTOMER"] = 1] = "OPTION_RENDER_INFO_CUSTOMER";
    CstCustomer[CstCustomer["OPTION_GET_MONEY"] = 2] = "OPTION_GET_MONEY";
    CstCustomer[CstCustomer["OPTION_EDIT_PASS"] = 3] = "OPTION_EDIT_PASS";
    CstCustomer[CstCustomer["OPTION_CALC_INTEREST"] = 4] = "OPTION_CALC_INTEREST";
    CstCustomer[CstCustomer["OPTION_TRANSFERS"] = 5] = "OPTION_TRANSFERS";
    CstCustomer[CstCustomer["OPTION_TRANSFERS_HISTORY"] = 6] = "OPTION_TRANSFERS_HISTORY";
    CstCustomer[CstCustomer["OPTION_OTHER"] = 7] = "OPTION_OTHER";
})(CstCustomer = exports.CstCustomer || (exports.CstCustomer = {}));
var CstCustomerExtra;
(function (CstCustomerExtra) {
    CstCustomerExtra[CstCustomerExtra["OPTION_EXIST"] = 0] = "OPTION_EXIST";
    CstCustomerExtra[CstCustomerExtra["OPTION_INSURANCE"] = 1] = "OPTION_INSURANCE";
    // OPTION_GET_MONEY = 2,
    // OPTION_EDIT_PASS = 3,
    // OPTION_CALC_INTEREST = 4,
    // OPTION_TRANSFERS = 5,
    // OPTION_TRANSFERS_HISTORY = 6,
    // OPTION_OTHER = 7,
})(CstCustomerExtra = exports.CstCustomerExtra || (exports.CstCustomerExtra = {}));
var CstCustomerInsura;
(function (CstCustomerInsura) {
    CstCustomerInsura[CstCustomerInsura["OPTION_ONE"] = 1] = "OPTION_ONE";
    CstCustomerInsura[CstCustomerInsura["OPTION_TWO"] = 2] = "OPTION_TWO";
    CstCustomerInsura[CstCustomerInsura["OPTION_THREE"] = 3] = "OPTION_THREE";
})(CstCustomerInsura = exports.CstCustomerInsura || (exports.CstCustomerInsura = {}));
var CstCustomerInsuraPrice;
(function (CstCustomerInsuraPrice) {
    CstCustomerInsuraPrice[CstCustomerInsuraPrice["OPTION_ONE_INSURACE"] = 100000] = "OPTION_ONE_INSURACE";
    CstCustomerInsuraPrice[CstCustomerInsuraPrice["OPTION_TWO_INSURACE"] = 500000] = "OPTION_TWO_INSURACE";
    CstCustomerInsuraPrice[CstCustomerInsuraPrice["OPTION_THREE_INSURACE"] = 1200000] = "OPTION_THREE_INSURACE";
})(CstCustomerInsuraPrice = exports.CstCustomerInsuraPrice || (exports.CstCustomerInsuraPrice = {}));
var CstCustomerPayElectric;
(function (CstCustomerPayElectric) {
    CstCustomerPayElectric[CstCustomerPayElectric["OPTION_PAY_ELECTRIC_ONE"] = 2500] = "OPTION_PAY_ELECTRIC_ONE";
    CstCustomerPayElectric[CstCustomerPayElectric["OPTION_PAY_ELECTRIC_TWO"] = 3500] = "OPTION_PAY_ELECTRIC_TWO";
    CstCustomerPayElectric[CstCustomerPayElectric["OPTION_PAY_ELECTRIC_THREE"] = 4500] = "OPTION_PAY_ELECTRIC_THREE";
})(CstCustomerPayElectric = exports.CstCustomerPayElectric || (exports.CstCustomerPayElectric = {}));
var CstCustomerInsuraPay;
(function (CstCustomerInsuraPay) {
    CstCustomerInsuraPay["OPTION_YES_INSURACE"] = "yes";
    CstCustomerInsuraPay["OPTION_NO_INSURACE"] = "no";
    CstCustomerInsuraPay["OPTION_ONE_INSURACE"] = "OPTION_ONE_INSURACE";
})(CstCustomerInsuraPay = exports.CstCustomerInsuraPay || (exports.CstCustomerInsuraPay = {}));
var CstAdmin;
(function (CstAdmin) {
    CstAdmin[CstAdmin["OPTION_EXIST"] = 0] = "OPTION_EXIST";
    CstAdmin[CstAdmin["OPTION_RENDER_LIST_CUSTOMER"] = 1] = "OPTION_RENDER_LIST_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_CREATE_CUSTOMER"] = 2] = "OPTION_CREATE_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_DELETE_CUSTOMER"] = 3] = "OPTION_DELETE_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_EDIT_CUSTOMER"] = 4] = "OPTION_EDIT_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_UPDATE_MONEY"] = 5] = "OPTION_UPDATE_MONEY";
    CstAdmin[CstAdmin["OPTION_GET_MONEY"] = 6] = "OPTION_GET_MONEY";
    CstAdmin[CstAdmin["OPTION_SORT_CUSTOMER"] = 7] = "OPTION_SORT_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_TRANSFERS_HISTORY"] = 8] = "OPTION_TRANSFERS_HISTORY";
    CstAdmin[CstAdmin["OPTION_FIND_CUSTOMER"] = 9] = "OPTION_FIND_CUSTOMER";
})(CstAdmin = exports.CstAdmin || (exports.CstAdmin = {}));
var CstAdminEdit;
(function (CstAdminEdit) {
    CstAdminEdit[CstAdminEdit["OPTION_EXIST"] = 0] = "OPTION_EXIST";
    CstAdminEdit[CstAdminEdit["OPTION_EDIT_NAME"] = 1] = "OPTION_EDIT_NAME";
    CstAdminEdit[CstAdminEdit["OPTION_EDIT_AGE"] = 2] = "OPTION_EDIT_AGE";
    CstAdminEdit[CstAdminEdit["OPTION_EDIT_EMAIL"] = 3] = "OPTION_EDIT_EMAIL";
    CstAdminEdit[CstAdminEdit["OPTION_EDIT_PHONE"] = 4] = "OPTION_EDIT_PHONE";
    CstAdminEdit[CstAdminEdit["OPTION_EDIT_IDCARD"] = 5] = "OPTION_EDIT_IDCARD";
    CstAdminEdit[CstAdminEdit["OPTION_EDIT_PASS"] = 6] = "OPTION_EDIT_PASS";
    CstAdminEdit[CstAdminEdit["OPTION_EDIT_USER"] = 7] = "OPTION_EDIT_USER";
})(CstAdminEdit = exports.CstAdminEdit || (exports.CstAdminEdit = {}));
var CstMenuMain;
(function (CstMenuMain) {
    CstMenuMain[CstMenuMain["OPTION_EXIST"] = 0] = "OPTION_EXIST";
    CstMenuMain[CstMenuMain["OPTION_LOGIN_ADMIN"] = 1] = "OPTION_LOGIN_ADMIN";
    CstMenuMain[CstMenuMain["OPTION_LOGIN_CUSTOMER"] = 2] = "OPTION_LOGIN_CUSTOMER";
    // OPTION_DELETE_CUSTOMER = 3,
    // OPTION_EDIT_CUSTOMER = 4,
    // OPTION_PAY_BILL = 5,
    // OPTION_UPDATE_AMOUNT_ELECTRIC = 6,
})(CstMenuMain = exports.CstMenuMain || (exports.CstMenuMain = {}));
function getTime() {
    let date = new Date();
    let newDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}  ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return newDate;
}
exports.getTime = getTime;
