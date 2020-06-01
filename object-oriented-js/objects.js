class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('mario@ninjas.com', 'Mario');

console.log(userOne);
console.log(userTwo);
