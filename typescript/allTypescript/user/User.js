"use strict";
exports.__esModule = true;
exports.User = exports.Role = void 0;
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role = exports.Role || (exports.Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return 'Tên' + this.name + ' Email : ' + this.email + ' Role : ' + this.role;
    };
    User.prototype.isAdmin = function () {
        if (this.role == 'admin') {
            return 'Tài khoản của bạn là Admin';
        }
        else {
            return 'Tài khoản của bạn là tài khoản cá nhân';
        }
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setAdmin = function (role) {
        this.role = role;
    };
    return User;
}());
exports.User = User;
