var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Staff.prototype.getInfo = function () {
        return 'Tên : ' + this.name + ' Tuổi : ' + this.age + ' Email : ' + this.email;
    };
    Staff.prototype.getName = function () {
        return 'Tên : ' + this.name;
    };
    Staff.prototype.getAge = function () {
        return ' Tuổi : ' + this.age;
    };
    Staff.prototype.getEmail = function () {
        return ' Email : ' + this.email;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var pr = new Staff('Phoanh', 'S30.tung@gmail', 24);
pr.setAge(15);
console.log(pr.getInfo());
