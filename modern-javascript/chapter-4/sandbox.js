// callbacks & forEach

// const myFunc = (num, callbackFunc) => {
//   // do something
//   let value = 1 + num;
//   callbackFunc(value);
// };

// myFunc(1, (value) => {
//   // do something
//   console.log(value);
// });

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

// people.forEach((person, b, c) => {
//   console.log(`hello ${person}, ${b}, ${c}`);
// });

people.forEach(logPerson);
