function add(num1, num2) {
    if (arguments.length > 2) {
        var r = arguments[0] + arguments[1];
        var k = 0
        for (var i = 2; i < arguments.length; i++) {
            k += arguments[i];
        }
        if ((r - k) < 0) {
            return -1 * (r - k);
        } else {
            return (r - k);
        }
    } else {
        return (num1 + num2);
    }

}
var a = add(2, 7, 4, 1);
if (isNaN(a)) {
    console.log(0)
} else {
    console.log(a);
}