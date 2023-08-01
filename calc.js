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
    console.log(`${op} ${num1} ${num2}`)
    if (!op || noNum(num1) || noNum(num2)) {
        return;
    }
    let result = null;
    switch (op) {
        case "+":
            result = add(num1, num2);
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
    if (result > 999999999999999) {
        result = "ERROR";
    }
    document.getElementById("display").innerText = result;
    clearData();
}


function clearData() {
    num1 = null;
    num2 = null;
    op = null;
}

function inputNum(num) {
    const display = document.getElementById("display")
    if ((noNum(num1) && noNum(num2) && !op) && display.innerText != "0.") {
        display.innerText = num;
    } else if (display.innerText.length >= 15 && !op) {
        return;
    } else if (op && display.innerText == num1) {
        display.innerText = num;
    } else if (display.innerText === "0") {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
    setOperand(+display.innerText)
}


function setOperand(num) {
    if (!op || noNum(num1)) {
        num1 = num;
    } else {
        num2 = num;
    }
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
    document.getElementById("equals").addEventListener("click", () => calculate(op, num1, num2));
    document.getElementById("decimal").addEventListener("click", () => inputDecimal())
}

function inputOp(operator) {
    if (!noNum(num1) && !noNum(num2) && op) {
        calculate(op, num1, num2);
    }
    
    if (noNum(num1)) {
        num1 = +document.getElementById("display").innerText;
    }
    op = operator;
}

function inputDecimal() {
    const display = document.getElementById("display");
    const dispArr = Array.from(display.innerText.toString());
    if ((op && display.innerText == num1) || (noNum(num1) && (noNum(num2) && !op))) {
        display.innerText = "0."; 
    } else if (dispArr.includes(".")) {
        return;
    } else {
        display.innerText += ".";
    }
}

function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

function noNum(num) {
    if (num === null || num === undefined || num === "") {
        return true;
    } else {
        return false;
    }
}

initialize();