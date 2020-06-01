class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email + ' just logged in');
  }
  logout() {
    console.log(this.email, 'just logged out');
  }
}

const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('mario@ninjas.com', 'Mario');

userOne.login();
userTwo.logout();
