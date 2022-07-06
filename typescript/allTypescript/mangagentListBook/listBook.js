"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var List = /** @class */ (function () {
    function List(book) {
        this.listBook = [];
        this.listBook.push(book);
    }
    List.prototype.getInfoList = function () {
        return this.listBook;
    };
    List.prototype.addBook = function (book) {
        this.listBook.push(book);
    };
    List.prototype.deleteBook = function (id) {
        var bookId = this.findBookById(id);
        this.listBook.splice(1, 1);
    };
    List.prototype.updateBook = function (id, name) {
        for (var i = 0; i < this.listBook.length; i++) {
            this.listBook[id].name = name;
            this.listBook[id].id = id;
        }
    };
    List.prototype.findBookById = function (id) {
        var i = -1;
        this.listBook.forEach(function (item) {
            if (item.id === id)
                i = id;
        });
        return i;
    };
    return List;
}());
var book = new Book_1.Book('1', 'ABC');
var book2 = new Book_1.Book('2', 'check');
var list = new List(book);
list.addBook(book2);
list.deleteBook('1');
console.log(list);
