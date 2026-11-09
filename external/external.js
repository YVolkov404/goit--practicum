// !! task 01 & 02
function getRandomInt(callback) {
  const min = 117;
  const max = 132;

  document.querySelector(".out-1").textContent = Math.floor(
    min + Math.random() * (max + 1 - min),
  );

  callback(min, max);
}

function getRandomInt2(min, max) {
  document.querySelector(".out-2").textContent = Math.floor(
    min + Math.random() * (max + 1 - min),
  );
}

getRandomInt(getRandomInt2);

// !! task 03
function t1() {
  return "Hello";
}
function t2() {
  return "2021";
}

function t3() {
  return (document.querySelector(".out-3").textContent = t1() + t2());
}

document.querySelector(".b-3").addEventListener("click", t3);

document
  .querySelector(".b-2")
  .addEventListener(
    "click",
    () => (document.querySelector(".out-3").textContent = ""),
  );

// !! task 04
function t4() {
  function hello(year) {
    return (document.querySelector(".out-4").textContent = `Hello${year}`);
  }

  function f2021(callback, year) {
    return callback(year);
  }

  f2021(hello, 2021);
}

function t4_1(callback) {
  return callback();
}

document.querySelector(".b-4").addEventListener("click", () => {
  t4_1(t4);
});

// !! task 05
const arg1 = 235;
const arg2 = 335;

function f1(min, max) {
  return (document.querySelector(".out-10").textContent = Math.floor(
    min + Math.random() * (max + 1 - min),
  ));
}

document.querySelector(".b-9").addEventListener("click", function () {
  f1(arg1, arg2);
});

// !! task 06
const num1 = 235;
const num2 = 335;
const block = (min, max) => {
  return (document.querySelector(".out-5").textContent = Math.floor(
    min + Math.random() * (max + 1 - min),
  ));
};

function f2(min, max, callback) {
  callback(min, max);
}

document.querySelector(".b-5").addEventListener("click", () => {
  f2(num1, num2, block);
});

// !! task 07
let a;
let b;
let c;

function t5(a, b, c) {
  a = prompt("enter the number");
  b = prompt("enter the number");

  if (Number(b) === 0 || Number(b) === "") {
    return (c = alert(`Second number equal '0'`));
  }

  return (document.querySelector(".out-6").textContent = (
    Number(a) / Number(b)
  ).toFixed(2));
}

document.querySelector(".b-6").addEventListener("click", () => {
  t5(a, b, c);
});

// !! task 08
let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 10);

let total = 0;

function sum(x, y) {
  total = x + y;
  return total;
}
console.log(sum(x, y));

// !! task 09
let f = Math.floor(Math.random() * 100);
let g = Math.floor(Math.random() * 100);

function biggestNumber(f, g) {
  return f > g ? f : g;
}
console.log(biggestNumber(f, g));

// !! task 10
const checkbox = document.querySelector("#checkbox");

const onInputChange = (event) => {
  const checkbox = event.currentTarget;

  return console.log(checkbox.checked ? checkbox.value : false);
};

checkbox.addEventListener("change", onInputChange);

// !! task 11
const radiobutton = document.querySelector("#radio");

const getRadioButton = (event) => {
  const radiobutton = event.currentTarget;

  return console.log(radiobutton.value);
};

radiobutton.addEventListener("change", getRadioButton);

// !! task 12
function multiplication(number) {
  return number ** 3;
}

const result1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(multiplication);
console.log(result1);

// !! task 13
const result2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => {
  return number ** 3;
});
console.log(result2);

// !! task 14
function isNumber(item) {
  return item >= 0 ? true : false;
}

const result3 = ["mango", 16, 8, "polly", 78, 45, 12, "ajax"].filter(isNumber);
console.log(result3);

// !! task 15
const result4 = ["mango", 16, 8, "polly", 78, 45, 12, "ajax"].filter((item) => {
  return item >= 0 ? true : false;
});
console.log(result4);

// !! task 16
function t5_1() {
  console.log(this);
  this.textContent = 'Hello'
}

t5_1.call(document.querySelector(".out-0"));

// !! task 17
function t6(str) {
  console.log(this);
  this.textContent = str;
}

document.querySelector(".b-7").addEventListener("click", () => {
  return t6.call(document.querySelector(".out-7"), "SayHi!");
});

// !! task 18
function max1(num1, num2) {
  console.log(this);
  return (this.textContent = num1 > num2 ? num1 : num2);
}

max1.call(document.querySelector(".out-8"), 15, 9);

// !! task 19
function max2(num1, num2) {
  console.log(this);
  return (this.textContent = num1 > num2 ? num1 : num2);
}

document.querySelector(".b-8").addEventListener("click", () => {
  console.log(max2.call(document.querySelector(".out-9"), 22, 13));
});
