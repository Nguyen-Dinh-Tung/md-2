var Fan = /** @class */ (function () {
    function Fan() {
        this.slow = 1;
        this.medium = 2;
        this.fast = 3;
        this.speed = this.slow;
        this.color = 'blue';
        this.radius;
    }
    Fan.prototype.getInfo = function () {
        if (this.on == true) {
            return 'Speed : ' + this.speed + ' Color : ' + this.color + ' Radius : ' + this.radius;
        }
    };
    Fan.prototype.getSlow = function () {
        return this.slow;
    };
    Fan.prototype.getMedium = function () {
        return this.medium;
    };
    Fan.prototype.getFast = function () {
        return this.fast;
    };
    Fan.prototype.setSpeed = function (type) {
        return this.speed = type;
    };
    Fan.prototype.setOn = function () {
        this.on = true;
    };
    Fan.prototype.setOff = function () {
        this.on = false;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    Fan.prototype.setRadius = function (number) {
        this.radius = number;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    return Fan;
}());
var fan1 = new Fan();
fan1.setOn();
console.log(fan1.getColor());
