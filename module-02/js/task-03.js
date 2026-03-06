// Створіть об'єкт калькулятор з трьома методами.
// read(a, b) - приймає два аргументи та зберігає їх
// як властивості об'єкта.
// sum() - повертає суму збережених значень.
// multiply() - перемножує збережені значення
// та повертає результат.

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    multiply() {
        return this.a * this.b;
    }
}

calculator.read(23, 9);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.multiply());