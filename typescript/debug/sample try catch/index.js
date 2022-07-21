var n = 5;
var de_n = 0;
try {
    if (de_n == 0) {
        throw 'Divide by zero error';
    }
    else {
        var sol = n / de_n;
    }
}
catch (e) {
    console.log('Error ' + e);
}
try {
    ab();
}
catch (e) {
    console.log(e.name);
}
