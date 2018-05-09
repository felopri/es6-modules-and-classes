let func = function calc() {return 0;}
console.log(func.name);
//calc

let fn = function () {return 0;}
console.log(fn.name);
//fn
let newFn = fn;
console.log(newFn.name);
//fn