'use strict';

function add(x, y) {
    return x + y;
}
function substract(x, y) {
    return x - y;
}

const x = 20;
const y = 10;
console.log(`${x} + ${y} = ${add(x, y)}`);
console.log(`${x} - ${y} = ${substract(x, y)}`);
