// callbacks & forEach

// const myFunc = (callbackFunction) => {
//   let value = 50;
//   callbackFunction(value);
// };

// myFunc((c) => {
//   console.log(c);
// });

// function callbackFunction(v) {
//   console.log(v);
// }

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach((person, index) => {
  console.log(`hello ${person} ${index}`);
});

people.forEach(logPerson);
