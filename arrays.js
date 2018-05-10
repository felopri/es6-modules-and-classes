let salaries = Array(90000);
console.log(salaries.length);
//90000

let salaries2 = Array.of(90000);
console.log(salaries2.length);
//1

let amounts = [800, 810, 820, 830];
let salaries3 = Array.from(amounts, v => v+100);
console.log(salaries3);
//[900, 910, 920, 930]

salaries3.fill(600, 2, 3);
console.log(salaries3);
//[900, 600, 600, 930]
salaries3.fill(600, 1);
console.log(salaries3);
//[900, 600, 600, 600]
salaries3.fill(700);
console.log(salaries3);
//[700, 700, 700, 700]