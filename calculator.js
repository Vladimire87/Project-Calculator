// Store variables for the calculator's display and the currently selected operator and numbers
let display = document.querySelector(".insideDisplay");
let operator = null;
let firstNumber = null;
let secondNumber = null;
display.textContent = "0";

// Add event listeners to all the number buttons
let numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator === "=") {
      operator = null;
      firstNumber = null;
      secondNumber = null;
    }
    if (operator === null) {
      // If no operator has been selected, add the number to the first number variable
      if (firstNumber === null) {
        firstNumber = button.textContent;
      } else {
        firstNumber += button.textContent;
      }
      // Update the display with the current first number
      display.textContent = firstNumber;
    } else {
      // If an operator has been selected, add the number to the second number variable
      if (secondNumber === null) {
        secondNumber = button.textContent;
      } else {
        secondNumber += button.textContent;
      }
      // Update the display with the current second number
      display.textContent = firstNumber + operator + secondNumber;
    }
  });
});

// Add event listener to the clear button
let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  // Reset all variables and clear the display
  operator = null;
  firstNumber = null;
  secondNumber = null;
  display.textContent = "0";
});

// Add event listeners to all the operator buttons
let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if ((firstNumber === null && secondNumber === null) || operator === "=") {
      return;
    }

    if (firstNumber !== null && secondNumber === null) {
      // If the first number has been selected but not the second, store the selected operator and update the display
      operator = button.textContent;
      display.textContent = firstNumber;
    } else if (firstNumber !== null && secondNumber !== null) {
      // If both numbers and an operator have been selected, calculate the result and update the display
      let result;
      switch (operator) {
        case "+":
          result = parseFloat(firstNumber) + parseFloat(secondNumber);
          break;
        case "-":
          result = parseFloat(firstNumber) - parseFloat(secondNumber);
          break;
        case "×":
          result = parseFloat(firstNumber) * parseFloat(secondNumber);
          break;
        case "÷":
          if (secondNumber === "0") {
            display.textContent = "ERROR:";
            break;
          }
          result = parseFloat(firstNumber) / parseFloat(secondNumber);
          break;
      }
      if (result.toString().length > 11) {
        display.textContent = result.toFixed(7);
      } else {
        display.textContent = result;
      }
      // display.textContent = result;
      // Store the result as the first number and reset the second number and operator
      firstNumber = result.toString();
      secondNumber = null;
      operator = button.textContent;
    }
  });
});

// Add event listener to the equals button
let equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
  if ((firstNumber === null && secondNumber === null) || operator === "=") {
    return;
  }

  if (firstNumber !== null && secondNumber !== null) {
    // If both numbers have been selected, calculate the result and update the display
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "×":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "÷":
        if (secondNumber === "0") {
          display.textContent = "ERROR:";
          break;
        }
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
    }
    display.textContent = result;
    // Store the result as the first number and reset the second number and operator
    firstNumber = result.toString();
    // secondNumber = null;
    operator = null;
  }
});
