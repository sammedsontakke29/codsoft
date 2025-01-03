
let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            clearDisplay();
        } else if (value === "=") {
            calculateResult();
        } else if (["+", "-", "*", "/"].includes(value)) {
            setOperator(value);
        } else {
            appendToDisplay(value);
        }
    });
});

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function setOperator(value) {
    if (currentInput === "") return; 
    if (previousInput !== "") {
        calculateResult();
    }
    operator = value;
    previousInput = currentInput;
    currentInput = "";
}


function calculateResult() {
    if (previousInput === "" || currentInput === "") return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Cannot divide by 0");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    display.value = currentInput;
}


function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
}
