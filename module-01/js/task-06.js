// *? При завантаженні сторінки користувачеві
// *? пропонується в prompt ввести число
// *? Значення додається до змінної total
// *? Операція введення числа триває,
// *? поки користувач не натисне cancel
// *? Після припинення введення значень
// *? показати alert з рядком "Total sum"

// *? Робити перевірку на число не потрібно

let inputValue = prompt("Введіть число");
let total = 0;
let check = false;

do {
  if (inputValue) {
    check = true;
    total += Number(inputValue);
    inputValue = prompt("Введіть число");
  } else {
    check = false;
    alert(`Total sum: ${total}`);
  }
} while (check);
