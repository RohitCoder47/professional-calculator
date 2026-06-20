// Display DOM element reference
const display = document.getElementById('display');

// Append numbers or operators to display
function appendValue(input) {
    // Agar screen par pehle se 'Error' ho toh use saaf karke naya digit likhein
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += input;
}

// Clear entire display
function clearDisplay() {
    display.value = '';
}

// Delete last character (Backspace)
function deleteLast() {
    if (display.value === 'Error') {
        display.value = '';
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Evaluate mathematical expression safely
function calculate() {
    try {
        let expression = display.value;
        
        // Agar display empty nahi hai toh hi calculate karein
        if (expression.trim() !== "") {
            // Evaluates string logic safely
            let result = eval(expression);
            
            // Check for division by zero (Infinity) or undefined logic
            if (result === Infinity || isNaN(result)) {
                display.value = 'Error';
            } else {
                // Round off up to 4 decimal places taaki layout break na ho (e.g., 0.1 + 0.2)
                display.value = Number(result.toFixed(4)).toString();
            }
        }
    } catch (error) {
        // Kisi bhi syntax error par screen pe Error dikhega
        display.value = 'Error';
    }
}