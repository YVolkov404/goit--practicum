const User = function ({username, age, numberOfPost}) {
    this.username = username;
    this.age = age;
    this.numberOfPost = numberOfPost;
}

User.prototype.getInfo = function () {
    const { username, age, numberOfPost } = this;
    return `Пользователю ${username} ${age} лет и у него ${numberOfPost} публикаций`;
}

const constructor = new User ({username: 'polly', age: 20, numberOfPost: 10})

console.log(constructor.getInfo());
