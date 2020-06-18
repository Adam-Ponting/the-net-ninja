var title = document.getElementById('page-title');
console.log(title);
title.onclick = function () {
  alert('You clicked me');
};
title.onmouseover = () => alert('Hover');
