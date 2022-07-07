var Aplication = /** @class */ (function () {
    //
    function Aplication(name) {
        this.name = name;
        Aplication.count++;
    }
    Aplication.count = 0;
    return Aplication;
}());
var a = new Aplication('Tung');
console.log(Aplication.count);
var b = new Aplication('Tung1');
console.log(Aplication.count);
