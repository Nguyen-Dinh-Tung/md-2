"use strict";
exports.__esModule = true;
exports.List = void 0;
var node_1 = require("./node");
var List = /** @class */ (function () {
    function List() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    List.prototype.addFristNode = function (name, score) {
        var node = new node_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    List.prototype.addLastNode = function (name, score) {
        if (!this.head) {
            this.addFristNode(name, score);
        }
        {
            var node = new node_1.Node(name, score);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    List.prototype.readList = function () {
        var List = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            List.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return List;
    };
    List.prototype.findScore = function () {
        var listScore = [];
        this.readList().forEach(function (element) {
            listScore.push(element.score);
        });
        return listScore;
    };
    List.prototype.totalStudentsFail = function () {
        var flag = 0;
        this.findScore().forEach(function (element) {
            if (element > 5) {
                flag++;
                return;
            }
        });
        return flag;
    };
    return List;
}());
exports.List = List;
