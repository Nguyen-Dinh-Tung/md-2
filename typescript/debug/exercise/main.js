function calc(number1, number2, operator) {
    var result;
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    if (operator == '/') {
        result = number1 / number2;
    }
    if (operator == '*') {
        result = number1 * number2;
    }
    else {
        throw RangeError('Operator must be + - * /');
    }
    return result;
}
try {
    console.log(calc(3, 2, '%'));
}
catch (e) {
    if (e instanceof RangeError) {
        console.log(e.message);
    }
}
