const myColor = document.getElementById('color-changer');
var colors = ['red', 'blue', 'green', 'pink'];
var counter = 0;

function changeColor() {
  if (counter >= colors.length) {
    counter = 0;
  }
  myColor.style.backgroundColor = colors[counter];
  counter++;
}
var myTimer = setInterval(changeColor, 1000);

myColor.onclick = function () {
  clearInterval(myTimer);
  myColor.innerHTML = '<p>Timer Stopped</p>';
};
