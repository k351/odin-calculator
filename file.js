function add (a, b) {
  return a + b;
}
function subtract (a, b) {
  return a - b;
}
function multiply (a, b) {
  return a * b;
}
function divide (a, b) {
  return (a / b * 10) / 10;
}

function operate(operator, number1, number2) {
  switch (operator) {
    case "+":
      return operate(number1, number2);
    case "-":
      return operate(number1, number2);
    case "*":
      return operate(number1, number2);
    case "/":
      return operate(number1, number2);
  }
}