"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, point) {
        this.name = name;
        this.point = point;
    }
    Player.prototype.getPoint = function () {
        return this.point;
    };
    return Player;
}());
exports.Player = Player;
