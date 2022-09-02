var operation;
var operand1 = 0;
var operand2 = 0;

function number(num) {
    document.getElementById("result").value += num;
}

function del() {
    let value = document.getElementById("result").value;
    if (value.length > 1) {
        value = value.substr(0, value.length - 1);
        value = document.getElementById("result").value = value;
    } else {
        value = document.getElementById("result").value = "";
    }
}

function AC() {
    document.getElementById("result").value = "";
    operand1 = "";
    operand2 = "";
    operation = "";
}

function plus() {
    operand1 = document.getElementById("result").value;
    operation = "+";
    document.getElementById("result").value = "";
}

function minus() {
    operand1 = document.getElementById("result").value;
    operation = "-";
    document.getElementById("result").value = "";
}


function product() {
    operand1 = document.getElementById("result").value;
    operation = "*";
    document.getElementById("result").value = "";
}

function divide() {
    operand1 = document.getElementById("result").value;
    operation = "÷";
    document.getElementById("result").value = "";
}

function sqrt() {
    operand1 = document.getElementById("result").value;
    operation = "sqrt";
    equal();
}

function percentage() {
    operand1 = document.getElementById("result").value;
    operation = "%";
    document.getElementById("result").value = "";
}

function reverse() {
    operand1 = document.getElementById("result").value;
    operation = "1/x";
    equal();
}

function signChange() {
    operand1 = document.getElementById("result").value;
    operation = "+/-";
    equal();
}

function equal() {
    operand2 = document.getElementById("result").value;
    console.log(operand2);

    let opResult = 0;
    switch (operation) {
        case "+":
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            opResult = operand1 + operand2;
            break;

        case "-":
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            opResult = operand1 - operand2;
            break;

        case "*":
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            opResult = operand1 * operand2;
            break;

        case "÷":
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            opResult = operand1 / operand2;
            break;

        case "sqrt":
            operand1 = parseFloat(operand1);
            opResult = Math.sqrt(operand1);
            break;

        case "%":
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            opResult = (operand1 * 0.01) * operand2;
            break;

        case "1/x":
            operand1 = parseFloat(operand1);
            opResult = 1 / operand1;
            break;

        case "+/-":
            operand1 = parseFloat(operand1);
            opResult = operand1 * -1;
            break;

        default:
            break;
    }
    document.getElementById("result").value = opResult;
}