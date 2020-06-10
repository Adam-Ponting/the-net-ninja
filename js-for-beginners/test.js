for (let index = 0; index < 10; index++) {
  if (index === 5 || index === 3) {
    continue;
  }
  console.log(index);
  if (index === 7) {
    break;
  }
}
console.log('broken out of the loop');
