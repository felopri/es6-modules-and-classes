let s = 'NaN';
console.log(isNaN(s));
//true
console.log(Number.isNaN(s));
//false

let n = '8000';
console.log(isFinite(n));
//true
console.log(Number.isFinite(n));
//false


let a = Math.pow(2, 53) -1;
console.log(Number.isSafeInteger(a));
//true
a = Math.pow(2, 53);
console.log(Number.isSafeInteger(a));
//false
