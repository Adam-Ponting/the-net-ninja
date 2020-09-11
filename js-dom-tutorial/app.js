const wrap = document.querySelector('#book-list li:nth-child(2) .name');

// console.log(wrap);

var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach((el) => console.log(el));
