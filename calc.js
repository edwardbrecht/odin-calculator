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

function calculate(op, num1, num2) {
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

function clearData() {
    num1 = null;
    num2 = null;
    op = null;
}

function inputNum(num) {
    const display = document.getElementById("display")
    
    if (display.innerText.length >= 15) {
        return;
    } else if (display.innerText === "0") {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
    setOperand(+display.innerText)
}

function initialize() {
    for (let i = 0; i < 10; i++) {
        let currentBtn = document.getElementById("num-" + i);
        currentBtn.addEventListener("click", () => inputNum(i));
    }

    document.getElementById("plus").addEventListener("click", () => inputOp("+"));
    document.getElementById("minus").addEventListener("click", () => inputOp("-"));
    document.getElementById("times").addEventListener("click", () => inputOp("*"));
    document.getElementById("divide").addEventListener("click", () => inputOp("/"));
}

function inputOp(operator) {
    op = operator;
    console.log(op);
    clearDisplay();
}

function setOperand(num) {
    if (!op) {
        num1 = num;
    } else {
        num2 = num;
    }
    console.log("num1: " + num1);
    console.log("num2: " + num2)
}

function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

initialize();