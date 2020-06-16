// var myPastDate = new Date(2020, 11, 14, 10, 23, 21);
// var myFutureDate = new Date(2515, 0, 1, 10, 23, 21);
// console.log(myPastDate);
// console.log(myFutureDate);

var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);
console.log(birthday);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()) {
  console.log('dame day!');
} else {
  console.log('not equal');
}
