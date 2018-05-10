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
salaries3.fill(500, -1);
console.log(salaries3);
//[700, 700, 700, 500]


let salaries4 = [600, 700, 800];
let result = salaries4.find(value => value >= 750);
console.log(result);
//800
console.log(salaries4.find(value => value >= 650));
//700

let ids = ['A', 'B', 'C'];
console.log(...ids.entries());
// [0, "A"], [1, "B"] ,[2, "C"]
console.log(...ids.keys());
// 0 1 2