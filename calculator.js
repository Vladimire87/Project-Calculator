function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

const buttons = {
  clear: document.getElementById("clear"),
  divide: document.getElementById("divide"),
  seven: document.getElementById("seven"),
  eight: document.getElementById("eight"),
  nine: document.getElementById("nine"),
  multiply: document.getElementById("multiply"),
  four: document.getElementById("four"),
  five: document.getElementById("five"),
  six: document.getElementById("six"),
  subtract: document.getElementById("subtract"),
  one: document.getElementById("one"),
  two: document.getElementById("two"),
  three: document.getElementById("three"),
  add: document.getElementById("add"),
  zero: document.getElementById("zero"),
  comma: document.getElementById("comma"),
  equals: document.getElementById("equals"),
};

const isTouchDevice = "ontouchstart" in document.documentElement;
let display = document.querySelector(".insideDisplay");
let number1 = "";
let number2 = "";
let operator = "";
display.innerText = 0;
Object.keys(buttons).forEach((key) => {
  const button = buttons[key];
  button.addEventListener(isTouchDevice ? "touchstart" : "click", () => {
    if (operator === "") {
      number1 += buttons[key].textContent;
    }

    display.innerText = number1 + operator + number2;
  });
});

// display = display[0].textContent;
