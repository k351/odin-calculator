let currentValue = "";
let previousValue = "";
let operator = "";
let result = "";

document.addEventListener("DOMContentLoaded", ()=> {

  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  let equal = document.querySelector(".equal");
  let decimal = document.querySelector(".decimal");
  let clear =  document.querySelector(".clear");

  let screenCurrent = document.querySelector(".current");
  let screenPrevious = document.querySelector(".previous")

  numbers.forEach(number => number.addEventListener("click", (e)=> {
      if (screenCurrent.textContent.length < 7){
        if(currentValue === "0"){
          currentValue = ""
        }
        handleNumber(e.target.textContent);
        screenCurrent.textContent = currentValue;
      }
    }
  ))

  operators.forEach(op => op.addEventListener("click", (e)=> {
      handleOperator(e.target.textContent)
      screenPrevious.textContent = previousValue;
  }))

  equal.addEventListener("click", ()=> {
    operate();
    screenCurrent.textContent = currentValue;
    screenPrevious.textContent = previousValue;
  })

  clear.addEventListener("click", ()=> {
    currentValue = "";
    previousValue = "";
    operator = "";
    result = "";
    screenCurrent.textContent = screenPrevious.textContent = currentValue;
  })

  decimal.addEventListener("click", ()=> {
    if (!currentValue.includes(".")) {
      currentValue += ".";     
      screenCurrent.textContent = currentValue; 
    }
  })

})

function handleNumber(num) {
  currentValue += num;
}

function handleOperator(op) {
  operator = op
  previousValue = currentValue + " " + op;
  currentValue = "";
}

function operate() {
  previousValue = parseFloat(previousValue);
  currentValue  = parseFloat(currentValue);

  switch (operator) {
    case "+":
      result = previousValue + currentValue;
      break;
    case "-":
      result = previousValue - currentValue;
      break;
    case "*":
      result = previousValue * currentValue;
      break;
    case "/":
      result = previousValue / currentValue;
      break;
  }

  currentValue = result.toString();
  previousValue = "";
  operator = "";
  result = "";
}