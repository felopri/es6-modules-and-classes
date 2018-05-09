let func = function calc() {return 0;}
console.log(func.name);
//calc

let fn = function () {return 0;}
console.log(fn.name);
//fn
let newFn = fn;
console.log(newFn.name);
//fn


class Calculator {
    constructor() {

    }
    add() {

    }
}
let c = new Calculator();
console.log(Calculator.name);
//Calculator
console.log(c.add.name);
//add

//Calculator.name = 'MyCalculator';
//Error: read only property 'name'

Object.defineProperty(Calculator, 'name', {
    value: 'MyCalculator'
});
console.log(Calculator.name);
//Calculator