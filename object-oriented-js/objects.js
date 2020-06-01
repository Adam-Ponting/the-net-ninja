class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email + ' just logged in');
    return this;
  }
  logout() {
    console.log(this.email, 'just logged out');
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this;
  }
}

const userOne = new User('ryu@ninjas.com', 'Ryu');
// const userTwo = new User('mario@ninjas.com', 'Mario');

userOne.login().updateScore().updateScore().logout();
// userTwo.logout();
// console.log(userTwo);
