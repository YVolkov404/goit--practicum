// У нас є об'єкт у якому зберігаються зарплати нашої команди.
// Напишіть код для підсумування всіх зарплат
// і збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0.

const salaries = {
    Mango: 100,
    Polly: 160,
    Ajax: 1470
}

const foo = function (salaries) {
    let sum = 0;

    const values = Object.values(salaries);

    for (const item of values) {
      sum += item;
    }

    return sum;
}



console.log(foo(salaries));