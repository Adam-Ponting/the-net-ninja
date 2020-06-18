const myForm = document.forms.myForm;
const message = document.getElementById('message');
myForm.fname.onfocus = function () {
  console.log(this);
  myForm.fname.style.border = '10px solid pink';
};
myForm.fname.onblur = function () {
  console.log(this);
  myForm.fname.style.border = 'none';
};
myForm.onsubmit = function () {
  if (myForm.fname.value.length === 0) {
    message.innerHTML = 'Please enter a name';
    console.log(event);
    console.log(this);
    event.preventDefault();
    // return false;
  } else {
    message.innerHTML = '';
    return true;
  }
};
