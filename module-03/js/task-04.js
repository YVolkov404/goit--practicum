const arr = ['BEST', 'the', 'foo', 'is', 'JS'];

const fnA = function (arr) {
    const index = arr.indexOf('foo');
    arr.splice(index, 1);
    return arr;
}

console.log(fnA(arr));

// const fnB = function (arr) {
//     return arr.reverse();
// }

// console.log(fnB(arr));

// const fnC = function (arr) {
//     return arr.join(' ');
// }

// console.log(fnC(arr));

const fnD = function (arr) {
    return arr.reverse().join(' ');
}

console.log(fnD(arr));