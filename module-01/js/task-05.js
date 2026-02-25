// *? Напишіть код, який запитуватиме
// *? логін за допомогою prompt та
// *? логуватиме результат у консоль

// *? Якщо відвідувіч вводить "Admin"
// *? тоді prompt запитує пароль.
// *? Якщо нічого не введено або натиснуто ESC -
// *? тоді вивести рядок "Abort"
// *? В іншому випадку вивести "I don`t know you"

// *? Пароль перевіряти наступним чином:
// *? якщо введено пароль "I`m the Boss" -
// *? тоді вивести рядок "Hi!"
// *? В іншому випадку - "Wrong password"

// const PASSWORD = "I`m the Boss"

const username = prompt("Enter username");

if (username === "Admin") {
  const password = prompt("Enter your password");
  if (password === "I`m the Boss") {
    alert("Hi!");
  } else {
    alert("Wrong password");
  }
} else if (username === " ") {
  alert("Abort");
} else {
  alert("I don`t know you");
}
