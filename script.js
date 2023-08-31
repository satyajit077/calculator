let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}


function handleKeydown(event) {
    if (event.key === "Enter") {
        calculate();
    }
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    
    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'You Have Entered a Wrong Input';
    }
}
