/* Kötelező sor, hogy betöltse az oldal a js kódot. */
document.addEventListener("DOMContentLoaded", () => {
  console.log("Oldal betöltése sikeres!");

  let display = document.getElementById("display");
  let currentOperand = "";
  let previousOperand = "";
  let operation = null;

  function displayNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
  }

  function chooseOperation(op) {
    /*Megvizzgálja, hogy üres-e a váltózó, ha igen akkor nem csinál semmit.*/
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
  }

  function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    currentOperand = computation;
    operation = null;
    previousOperand = "";
    updateDisplay();
  }

  function clearDisplay() {
    currentOperand = "";
    previousOperand = "";
    operation = null;
    updateDisplay();
  }

  function updateDisplay() {
    display.innerText = currentOperand;
  }

  clearDisplay();

  // Eseménykezelők hozzárendelése a gombokhoz
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText;
      if ((value >= "0" && value <= "9") || value === ".") {
        displayNumber(value);
      } else if (value === "C") {
        clearDisplay();
      } else if (value === "=") {
        compute();
      } else {
        chooseOperation(value);
      }
    });
  });
});
