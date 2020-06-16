var Car = function (maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function (speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function () {
    console.log('Driver name is: ' + this.driver);
  };
};

var myCar = new Car(50, 'ninja');
console.log(myCar.logDriver());
console.log(myCar.drive(50, 2));
