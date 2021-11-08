let firstNum = "";
let secondNum = "";
let op;
let numlist = [];

document.getElementById("one_input_button").addEventListener("click", oneInput);

function oneInput() {
    document.getElementById("screen").textContent += "1";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("two_input_button").addEventListener("click", twoInput);

function twoInput() {
    document.getElementById("screen").textContent += "2";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("three_input_button").addEventListener("click", threeInput);

function threeInput() {
    document.getElementById("screen").textContent += "3";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("four_input_button").addEventListener("click", fourInput);

function fourInput() {
    document.getElementById("screen").textContent += "4";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("five_input_button").addEventListener("click", fiveInput);

function fiveInput() {
    document.getElementById("screen").textContent += "5";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("six_input_button").addEventListener("click", sixInput);

function sixInput() {
    document.getElementById("screen").textContent += "6";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("seven_input_button").addEventListener("click", sevenInput);

function sevenInput() {
    document.getElementById("screen").textContent += "7";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("eight_input_button").addEventListener("click", eightInput);

function eightInput() {
    document.getElementById("screen").textContent += "8";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("nine_input_button").addEventListener("click", nineInput);

function nineInput() {
    document.getElementById("screen").textContent += "9";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("zero_input_button").addEventListener("click", zeroInput);

function zeroInput() {
    document.getElementById("screen").textContent += "0";
    numlist.push(document.getElementById("screen").textContent);
}

document.getElementById("clear_button").addEventListener("click", clearInput);

function clearInput() {
    document.getElementById("screen").textContent = "";
    numlist.push(document.getElementById("screen").textContent);
}


// Operations

document.getElementById("add_input_button").addEventListener("click", addOperator);

function addOperator() {
    firstNum = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    firstNum = parseInt(firstNum);
    op = "add";
}

document.getElementById("sub_input_button").addEventListener("click", subOperator);

function subOperator() {
    firstNum = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    firstNum = parseInt(firstNum);
    op = "sub";
}

document.getElementById("mult_input_button").addEventListener("click", multOperator);

function multOperator() {
    firstNum = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    firstNum = parseInt(firstNum);
    op = "mul";
}

document.getElementById("div_input_button").addEventListener("click", divOperator);

function divOperator() {
    firstNum = document.getElementById("screen").textContent;
    document.getElementById("screen").textContent = "";
    firstNum = parseInt(firstNum);
    op = "div";
}

// Equal 

document.getElementById("equal_input_button").addEventListener("click", equalOutput);

function equalOutput() {
    secondNum = document.getElementById("screen").textContent;
    secondNum = parseInt(secondNum);

    if (op == "add") {
        document.getElementById("screen").textContent = firstNum + secondNum;
    }
    else if(op == "sub"){
        document.getElementById("screen").textContent = firstNum - secondNum;
    }
    else if(op == "div"){
        document.getElementById("screen").textContent = firstNum / secondNum;
    }
    else if(op == "mul"){
        document.getElementById("screen").textContent = firstNum * secondNum;
    }
    op = 0;
}