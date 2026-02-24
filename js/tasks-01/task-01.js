// JavaScript tasks | Task 01

console.log("Hello World");

// *? використовуючи функцію if...else
// *? напишіть код який запитуватиме:
// *? "Яка офіційна назва JavaScrijpt?"
// *? Якщо користувач вводе "ECMAScript",
// *? то показати через alert: "Вірно!"
// *? інакше відобразити: "Не знаєте? ECMAScript!"

const officialName = prompt("Яка офіційна назва JavaScrijpt?").trim();

if (officialName === "ECMAScript") {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}
