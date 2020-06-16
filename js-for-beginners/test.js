var myCar2 = {
  maxSpeed: 100,
  driver: 'Adam',
  drive: function (speed, time) {
    console.log(speed * time);
  },
  logDriver: function () {
    console.log('Driver name is: ' + this.driver);
  },
};
// console.log(myCar2.drive(50, 3));
myCar2.logDriver();
