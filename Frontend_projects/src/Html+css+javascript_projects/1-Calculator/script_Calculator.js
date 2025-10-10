/* Kötelező sor, hogy betöltse az oldal a js kódot. */
document.addEventListener("DOMContentLoaded", () => {
  console.log("Oldal betöltése sikeres!");

  //változók:
  let display = document.getElementById("display");
  let history = document.getElementById("history");
  let currentOperand = "";
  let previousOperand = "";
  let operation = null;

  function appendNumber(number) {
    // Ha nincs aktív művelet és a currentOperand már tartalmaz számot, ne töröljük
    if (!operation && currentOperand === "0" && number !== ".") {
      currentOperand = "";
      // Csak akkor töröljük, ha a felhasználó új számot kezd el beírni
    }

    // Ne engedjünk több tizedespontot
    // === nem csak az érték a fontos, hanem a típus is ua.
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
    updateHistory();
  }

  function chooseOperation(op) {
    /*Megvizsgálja, hogy üres-e a váltózó, ha igen akkor nem csinál semmit.*/
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
    updateHistory();
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
    updateHistory();
  }

  function clearDisplay() {
    currentOperand = "";
    previousOperand = "";
    operation = null;
    updateDisplay();
    history.innerText = "0"; // Történet törlése
  }

  function updateDisplay() {
    display.innerText = currentOperand || "0";
  }

  function updateHistory() {
    history.innerText = `${previousOperand} ${
      operation || ""
    } ${currentOperand}`;
  }

  clearDisplay();

  // Eseménykezelők hozzárendelése a gombokhoz
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText;
      if ((value >= "0" && value <= "9") || value === ".") {
        appendNumber(value);
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
