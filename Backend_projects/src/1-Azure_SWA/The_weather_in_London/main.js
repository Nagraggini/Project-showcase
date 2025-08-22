//Kikeresi a HTML-ből azt az elemet, amelynek az id-je "weather" (jelen esetben span), és eltárolja a weather változóban.
//Ebbe fogjuk kiírni az időjárási adatot.
const weather = document.getElementById("weather");

//Ugyanez, csak a "btn" id-jű elemet (pl. egy gombot) menti el a btn változóba.
const btn = document.getElementById("btn");

//Létrehoz egy URL-t az Open-Meteo API-hoz, ami London (51.5074, -0.1278) aktuális időjárási adatait fogja visszaadni.
let url =
  "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true";

//Lekéri az adatokat az API-tól (fetch(url)).
//Az első .then() átalakítja a választ JSON objektummá.
//A második.then() a visszakapott adatokból(data) kiveszi az aktuális hőmérsékletet(data.current_weather.temperature)
//és kiírja a weather elem szövegébe, pl. 21°C.

fetch(url)
  .then((response) => response.json())
  .then(
    (data) => (weather.textContent = data.current_weather.temperature + "°C")
  );

//Ez egy függvény, ami akkor fut le, ha a gombot megnyomod.
//Először feldob egy üzenetet (alert("Button clicked!")).
//Ezután a gomb (btn) háttérszínét kékre állítja, a szöveg színét pedig fehérre.
function clicked() {
  alert("Button clicked!");
  btn.style.backgroundColor = "darkblue";
  btn.style.color = "white";
}
