const myForm = document.forms.myForm;
myForm.fname.onfocus = function () {
  console.log(this);
  myForm.fname.style.border = '10px solid pink';
};
myForm.fname.onblur = function () {
  console.log(this);
  myForm.fname.style.border = 'none';
};
