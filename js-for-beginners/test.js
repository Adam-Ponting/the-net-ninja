function getAverage(a, b) {
  var average = (a + b) / 2;
  console.log(average);
  return average;
}

var myResult = getAverage(7, 11);

function logResult() {
  console.log('The average is ' + myResult + ' inside the function');
}
logResult();
