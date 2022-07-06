"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, name) {
        this.id = id;
        this.name = name;
    }
    Book.prototype.getBook = function () {
        return 'Name : ' + this.name + ' Id : ' + this.id;
    };
    Book.prototype.getName = function () {
        return 'Name : ' + this.name;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    Book.prototype.getId = function () {
        return ' Id : ' + this.id;
    };
    return Book;
}());
exports.Book = Book;
