// script.js
let currentInput = '';
let operator = '';
let operand1 = null;

function clearDisplay() {
    document.getElementById('display').value = '';
    currentInput = '';
    operator = '';
    operand1 = null;
}

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;

    if (operand1 === null) {
        operand1 = parseFloat(currentInput);
    } else {
        calculateResult();
    }
    
    operator = op;
    currentInput = '';
}

function calculateResult() {
    if (operator === '' || currentInput === '') return;

    let operand2 = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
    }

    document.getElementById('display').value = result;
    currentInput = result;
    operator = '';
    operand1 = null;
}
