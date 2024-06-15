let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '';
}

function appendToDisplay(value) {
    display.textContent += value;
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
