const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const allClear = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let currentNumber = "0";
let prevNumber = "";
let calculationOperator = "";

const inputNumber = (number) => {
    if (currentNumber === "0"){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const updateScreen = function(number){
    calculatorScreen.value = number;
};

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber;
    }
    calculationOperator= operator;
    currentNumber = "0";
};

const calculator = () => {
    let result = "";
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber + currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    };
    currentNumber = result;
    calculationOperator = "";
};

const clear = function(){
    let currentNumber = "0";
    let prevNumber = "";
    let calculationOperator = "";
}

const inputDecimal = function(decimal){
    if (currentNumber.includes(".")) {
        return;
    }
    currentNumber += decimal;
}

allClear.addEventListener("click", function(){
    clear();
    updateScreen(currentNumber);
});

equalSign.addEventListener("click", function() {
    calculator();
    updateScreen(currentNumber);
});

numbers.forEach((number) => {
    number.addEventListener("click", function(e) {
        inputNumber(e.target.value);
        updateScreen(currentNumber);
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", function(e) {
        if (calculationOperator === '') {
            prevNumber = currentNumber;
        }
        calculationOperator  = operator;
        currentNumber = "0";
    });
});

decimal.addEventListener("click", function(e) {
    inputDecimal(e.target.value);
    updateScreen(currentNumber);
});