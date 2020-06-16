// var myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver = 'Shaun';
// // console.log(myCar);
// myCar.drive = function () {
//   console.log('Now driving!');
// };

// myCar.drive();

var myCar2 = {
  maxSpeed: 100,
  driver: 'Adam',
  drive: function (speed, time) {
    console.log(speed * time);
  },
};
// console.log(myCar2.maxSpeed);
console.log(myCar2.drive(50, 3));
