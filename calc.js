let num1 = null;
let num2 = null;
let op = null;

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operate(op, num1, num2) {
    let result = null;
    switch (op) {
        case "+":
            result = sum(num1, num2);
            break;
        case "-":
            result = sub(num1, num2);
            break;
        case "*":
            result = mult(num1, num2);
            break;
        case "/":
            result = div(num1, num2);
            break;
    }
    return result;
}

function clear() {
    num1 = null;
    num2 = null;
    op = null;
}