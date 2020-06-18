var content = document.getElementById('content');
var button = document.getElementById('show-more');
button.onclick = function () {
  if (content.className == 'open') {
    content.classList.remove('open');
    console.log('removing');
    button.innerText = 'Show more';
  } else {
    content.classList.add('open');
    console.log('adding');
    button.innerText = 'Show less';
  }
};
