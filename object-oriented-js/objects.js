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

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}
const userOne = new User('ryu@ninjas.com', 'Ryu');
const userTwo = new User('mario@ninjas.com', 'Mario');
const admin = new Admin('theadmin@admin.com', 'MrAdmin');

// userOne.login().updateScore().updateScore().logout();

let users = [userOne, userTwo, admin];
console.log(users);
admin.deleteUser(userOne);
console.log(users);
