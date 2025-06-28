/* Kötelező sor, hogy betöltse az oldal a js kódot. */
document.addEventListener("DOMContentLoaded", () => {
  let outputUserresult = 0; // Eredmények tárolása
  console.log("Oldal betöltése sikeres!");

  function checkAnswer() {
    outputUserresult = 0; // Minden ellenőrzés előtt nullázd!
    console.log("Eredmények visszaállítása sikeres!");

    // Példa: kérdés1 radio gomb értékének lekérése
    const selected = document.querySelector('input[name="question1"]:checked');
    if (selected && selected.value === "had started") {
      outputUserresult += 1; // Eredmény növelése, ha a válasz helyes
    }

    displayResult(outputUserresult);
    console.log("Your correct answer is: " + outputUserresult);
  }

  // Funkció a választás kijelzésére
  function displayResult(outputUserresult) {
    // Eredmény megjelenítése az oldalon
    document.getElementById(
      "outputUserresult"
    ).innerText = `Your correct answers: ${outputUserresult}`;
  }

  // Például egy gombra kattintva hívd meg:
  document.getElementById("submitBtn").onclick = checkAnswer;
});
