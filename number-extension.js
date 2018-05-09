let s = 'NaN';
console.log(isNaN(s));
//true
console.log(Number.isNaN(s));
//false

let a = '8000';
console.log(isFinite(a));
//true
console.log(Number.isFinite(a));
//false