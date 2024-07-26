function performOperation(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}
function add(x,y) {
    return x+y;
}

function subtract(x,y) {
    return x-y;
}

function mul(x,y) {
    return x*y;
}

function div(x,y) {
    return x/y;
}

console.log(performOperation(10,5,add));
console.log(performOperation(10,5,subtract));
console.log(performOperation(10,5,mul));
console.log(performOperation(10,5,div));