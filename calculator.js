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

let display = document.getElementsByClassName("insideDisplay");
display = display[0].textContent;
console.log(display);

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

Object.keys(buttons).forEach((key) => {
  const button = buttons[key];
  button.addEventListener(isTouchDevice ? "touchstart" : "click", () => {
    console.log(buttons[key]);
  });
});
