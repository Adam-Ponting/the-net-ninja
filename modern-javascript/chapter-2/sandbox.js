// arrays

let ninjas = ['shaun', 'ryu', 'chun-li'];
// console.log(ninjas);

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);
// array length
// console.log(ninjas.length);

// array methods

// let result = ninjas.join(', ');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.unshift('ken');
result = ninjas.shift();

console.log(result, ninjas);
