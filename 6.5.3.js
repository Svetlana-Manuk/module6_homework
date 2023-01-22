function sum(x) {
    return function(y) {
        return x + y;
    };
}

let f = sum(5);
console.log( f(1), f(2), f(3) );

