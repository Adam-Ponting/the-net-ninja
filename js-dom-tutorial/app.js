const buttons = document.querySelectorAll('#book-list .delete');

console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        console.log(li);
        console.log(li.parentNode);
        li.parentNode.removeChild(li);
    });
});

const link = document.querySelector('#page-banner a');
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Navigation to ${e.target.textContent} was prevented`);
});
