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
console.log(addForm);
