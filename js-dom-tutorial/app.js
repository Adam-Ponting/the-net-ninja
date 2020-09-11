var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach((element) => {
    console.log(element);
});
