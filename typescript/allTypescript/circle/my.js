var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    return Circle;
}());
var one = new Circle(9);
var two = new Circle(20);
function prize(one, two, d) {
    var distance = Math.pow(one.radius - two.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
console.log(prize(one, two, 20));
