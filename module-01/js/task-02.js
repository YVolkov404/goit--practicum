// *? Напишіть програму, яка отримує від користувача
// *? число (кількість хвилин) та виведе у консоль
// *? рядок у форматі годин та хвилин
// *? 378 === 01:10

// console.log("Hello world");

const time = 378;
const hour = 60;
const hours = Math.floor(time / hour);
const hoursToString = String(hours).padStart(2, 0);
const minutes = time % hour;
const minutesToString = String(minutes).padStart(2, 0);

console.log(`Time: ${hoursToString}:${minutesToString}`);
