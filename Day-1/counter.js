function Counter() {
    var c = 0;

    function Operation() {
        c = c + 1;
        return c;
    }
    return Operation;

}
var a = Counter();
console.log(a());
console.log(a());
console.log(a());