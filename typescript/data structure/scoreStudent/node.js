"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name, score) {
        this.name = name;
        this.score = score;
    }
    Node.prototype.readData = function () {
        return {
            name: this.name,
            score: this.score
        };
    };
    return Node;
}());
exports.Node = Node;
