const bookList = document.querySelector('#book-list');

// console.log(bookList.nextElementSibling);
console.log(bookList.nextElementSibling);
console.log(bookList.previousElementSibling);
console.log(bookList.previousSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br /> Too Cool for everyone else';
