var books = document.querySelectorAll('#book-list li .name');
console.log(books);
// Array.from(books).forEach((book) => console.log(book));
books.forEach((book, i) => {
    book.textContent += ` (book title) Test: ${i}`;
});

const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';
