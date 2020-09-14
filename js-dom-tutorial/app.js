const list = document.querySelector('#book-list ul');
console.log(list);

// delete books
list.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});
