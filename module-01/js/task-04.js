// *? За допомогою циклу for складіть
// *? усі парні числа від min до max

const min = 10;
const max = 25;
let sum = 0;

for (let i = min; i <= max; i++) {
  if (i !== 0) {
    sum += i;
  }
}

console.log(sum);
