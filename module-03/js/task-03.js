class Client {
    #login;
    #email; 

    constructor({login = '', email = ''} ={}) {
        this.#login = login;
        this.#email = email;
    }
    get login () {
        return this.#login;
    }
    set login (newLogin) {
        if (newLogin === '') {
            console.error('Error!');
            return;
        }
        this.#login = newLogin;
    }
    get email () {
        return this.#email;
    }
    set email (newMail) {
        if (newMail === '') {
            console.error('Error!');
            return;
        }
        this.#email = newMail;
    }
}

const auth = new Client({login: 'mango', email: 'mango@email.ua'})

console.log(auth.login);
console.log(auth.email);
auth.login = 'polly';
auth.email = 'polly@email.ua'
console.log(auth.login);
console.log(auth.email);


