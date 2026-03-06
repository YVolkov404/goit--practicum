const Storage = function (items) {
    this.items = items;
    console.log(this.items);
}

Storage.prototype.getItems = function () {
    return this.items;
}

Storage.prototype.addItems = function (item) {
    return this.items.push(item);
}

Storage.prototype.removeItems = function (item) {
    const array = this.getItems();
    for (el of array) {
        if(array.includes(item) || array.includes(el)) {
            const index = array.indexOf(item);
            if (index > -1) {
                return this.items.splice(index, 1);
            }
        }
    }
    return `There is no ${item}`;
}

const storage = new Storage(['apple', 'banana', 'mango']);

console.log(storage.getItems());
console.log(storage.addItems('apple'));
console.log(storage.getItems());
console.log(storage.removeItems('kiwi'));
console.log(storage.removeItems('apple'));
console.log(storage.getItems());
