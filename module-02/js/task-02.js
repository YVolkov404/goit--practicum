// Напишіть функцію calcTotalPrice(stones, stonesName),
// яка приймає масив об'єктів та рядок під назвою каменю.
// Функція вважає та повертає загальну вартість каменів
// з таким ім'ям, ціною та кількістю з об'єкта

const stones = [
  { name: "Ізумруд", price: 1300, quantity: 4 },
  { name: "Смарагд", price: 2700, quantity: 6 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Рубін", price: 150, quantity: 100 },
];

const totalPrice = function calcTotalPrice(stones, stonesName) {
  let total = 0;

  for (const { name, price, quantity } of stones) {
    if (name === stonesName) {
      total += price * quantity;
    }
  }

  return total;
};

console.log(totalPrice(stones, "Сапфір"));
console.log(totalPrice(stones, "Смарагд"));
console.log(totalPrice(stones, "Рубін"));
console.log(totalPrice(stones, "Ізумруд"));

