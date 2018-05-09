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


//--------MATH-----------
console.log(Math.sign(0));
//0
console.log(Math.sign(-0));
//-0
console.log(Math.sign(12));
//1
console.log(Math.sign(-20));
//-1
console.log(Math.sign(NaN));
//NaN


console.log(Math.cbrt(27));
//3


console.log(Math.trunc(27.1));
//27
console.log(Math.trunc(-27.9));
//-27