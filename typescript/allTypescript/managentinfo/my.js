var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, date, email, phone) {
        this.name = name;
        this.date = date;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
    }
    return Staff;
}());
var a = new Staff('Tung', Gender.Male, 15, 's30.tung@gmail.com', '0337118801');
var b = new Staff('Tung', Gender.Male, 15, 's30.tung@gmail.com', '0337118801');
var c = new Staff('Tung', Gender.Male, 15, 's30.tung@gmail.com', '0337118801');
var listEmployee = [];
listEmployee.push(a);
listEmployee.push(b);
listEmployee.push(c);
function render(staff) {
    console.log(staff);
}
listEmployee.forEach(render);
