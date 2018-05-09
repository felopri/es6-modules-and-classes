let salaries = Array(90000);
console.log(salaries.length);
//90000

let salaries2 = Array.of(90000);
console.log(salaries2.length);
//1

let amounts = [800, 810, 820];
let salaries3 = Array.from(amounts, v => v+100);
console.log(salaries3);
//[900, 910, 920]
