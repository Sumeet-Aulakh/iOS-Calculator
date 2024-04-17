var result = document.getElementById("result");
var number = parseInt(storedNumber);
var equation = "";
var storedNumber = 0;
var alreadyOperatorUsed = false;
for (let i = 0; i < 10; i++) {
  let number = document.getElementsByClassName("btn-" + i)[0];
  number.addEventListener("click", function () {
    equation += number.innerHTML;
    console.clear();
    console.log(equation);
    if (alreadyOperatorUsed) {
      alreadyOperatorUsed = !alreadyOperatorUsed;
      storedNumber = evaluate(equation);
      result.innerHTML = number.innerHTML;
    } else {
      storedNumber == 0
        ? (storedNumber = number.innerHTML)
        : (storedNumber += number.innerHTML);
      result.innerHTML = storedNumber;
    }
  });
}
const c = document.getElementsByClassName("btn-c")[0];
c.addEventListener("click", function () {
  equation = "";
  storedNumber = 0;
  console.clear();
  console.log(equation);
  result.innerHTML = storedNumber;
});
const larr = document.getElementsByClassName("btn-larr")[0];
larr.addEventListener("click", function () {
  equation = equation.slice(0, -1);
  storedNumber = storedNumber.slice(0, -1);
  if (equation == "") {
    storedNumber = 0;
  }
  console.clear();
  console.log(equation);
  result.innerHTML = storedNumber;
});

const arr = ["btn-divide", "btn-x", "btn-minus", "btn-plus"];
arr.forEach((element) => {
  let operator = document.getElementsByClassName(element)[0];
  operator.addEventListener("click", function () {
    if (operator.innerHTML == "×") {
      equation += "*";
    } else if (operator.innerHTML == "÷") {
      equation += "/";
    } else {
      equation += operator.innerHTML;
    }
    console.clear();
    console.log(equation);
    alreadyOperatorUsed = !alreadyOperatorUsed;
  });
});
const equal = document.getElementsByClassName("btn-equal")[0];
equal.addEventListener("click", function () {
  if (equation == "") {
    storedNumber = 0;
  }
  if (!alreadyOperatorUsed) {
    return (result.innerHTML = storedNumber);
  }

  storedNumber = evaluate(equation);
  console.clear();
  console.log(equation);
  result.innerHTML = storedNumber;
});

function evaluate(equation) {
  let values = equation.split(/[+\-*/]/);
  let operators = equation.split(/[0-9]/).filter(Boolean);
  var answer = calculate(
    parseInt(values[0]),
    parseInt(values[1]),
    operators[0]
  );
  console.log("Answer: " + answer);
  return answer;
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
