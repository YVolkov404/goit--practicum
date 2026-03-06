const User = function ({username, age, numberOfPost}) {
    this.username = username;
    this.age = age;
    this.numberOfPost = numberOfPost;
}

User.prototype.getInfo = function (username, age, numberOfPost) {
    return `Пользователю ${this.username} ${this.age} лет и у него ${this.numberOfPost} публикаций`;
}

const constructor = new User ({username: 'polly', age: 20, numberOfPost: 10})

console.log(constructor.getInfo());
