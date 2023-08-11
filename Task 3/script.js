let currentInput = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        document.getElementById('display').value = '';
        resultDisplayed = false;
    }
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (result === Infinity || isNaN(result)) {
            throw new Error('Invalid expression');
        }
        document.getElementById('display').value = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculatePercentage() {
    try {
        let percentValue = eval(currentInput) / 100;
        document.getElementById('display').value = percentValue;
        currentInput = percentValue.toString();
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
