"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CstMenuMain = exports.CstAdminEdit = exports.CstAdmin = exports.CstCustomer = exports.PRICEELECTRIC = void 0;
exports.PRICEELECTRIC = 3000;
var CstCustomer;
(function (CstCustomer) {
    CstCustomer[CstCustomer["OPTION_EXIST"] = 0] = "OPTION_EXIST";
    CstCustomer[CstCustomer["OPTION_RENDER_INFO_CUSTOMER"] = 1] = "OPTION_RENDER_INFO_CUSTOMER";
    // OPTION_CREATE_CUSTOMER = 2,
    // OPTION_DELETE_CUSTOMER = 3,
    // OPTION_EDIT_CUSTOMER = 4,
    // OPTION_UPDATE_MONEY = 5,
    // OPTION_SORT_CUSTOMER = 6,
})(CstCustomer = exports.CstCustomer || (exports.CstCustomer = {}));
var CstAdmin;
(function (CstAdmin) {
    CstAdmin[CstAdmin["OPTION_EXIST"] = 0] = "OPTION_EXIST";
    CstAdmin[CstAdmin["OPTION_RENDER_LIST_CUSTOMER"] = 1] = "OPTION_RENDER_LIST_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_CREATE_CUSTOMER"] = 2] = "OPTION_CREATE_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_DELETE_CUSTOMER"] = 3] = "OPTION_DELETE_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_EDIT_CUSTOMER"] = 4] = "OPTION_EDIT_CUSTOMER";
    CstAdmin[CstAdmin["OPTION_UPDATE_MONEY"] = 5] = "OPTION_UPDATE_MONEY";
    CstAdmin[CstAdmin["OPTION_SORT_CUSTOMER"] = 6] = "OPTION_SORT_CUSTOMER";
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
