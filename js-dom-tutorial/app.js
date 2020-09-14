const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

// add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // created elements
    const li = document.createElement('li');
    const spanBookName = document.createElement('span');
    const spanBookDelete = document.createElement('span');

    // add content
    spanBookName.textContent = value;
    spanBookDelete.textContent = 'Delete';

    // add classes
    spanBookName.classList.add('name');
    spanBookDelete.classList.add('delete');

    li.appendChild(spanBookName);
    li.appendChild(spanBookDelete);
    list.appendChild(li);

    addForm.querySelector('input[type="text"]').value = '';
});

const hideBox = document.querySelector('#add-book #hide');

hideBox.addEventListener('change', (e) => {
    if (hideBox.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
});

const searchBar = document.querySelector('#search-books').querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.querySelectorAll('li');
    books.forEach((book) => {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) !== -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach((panel) => {
            if (panel === targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});
