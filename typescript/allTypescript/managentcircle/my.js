var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    return Circle;
}());
var arr = [];
var a = new Circle(15, 'blue');
var b = new Circle(10, 'red');
var c = new Circle(20, 'green');
arr.push(a);
arr.push(b);
arr.push(c);
function showCircle(circle) {
    console.log('Ban kinh' + circle.radius + ' Mau :' + circle.color);
}
arr.forEach(showCircle);
