const arr = ['BEST', 'the', 'foo', 'is', 'JS'];

const fnA = function (arr) {
    const index = arr.indexOf('foo');
    arr.splice(index, 1);
    return arr;
}

console.log(fnA(arr));