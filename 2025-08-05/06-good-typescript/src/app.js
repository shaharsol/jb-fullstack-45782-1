"use strict";
(function () {
    // example 1
    var x = 1;
    var y = 2;
    // x = '1'
    console.log(x + y);
    // example 2
    function sum(a, b) {
        return a + b;
    }
    // sum = '1'
    console.log(sum(1, 2));
    // example 3
    function multiply(a, b) {
        var result = a * b;
    }
    console.log(multiply(2, 3));
})();
