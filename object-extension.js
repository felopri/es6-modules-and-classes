let a = { a: 1}, 
    b = { a: 5, b: 2},
    c = { c: 20};
    
Object.setPrototypeOf(b, c);

let target = {};
Object.assign(target, a, b);
console.log(target);
//{ a: 5, b: 2} 


let amount = NaN;
console.log(amount === amount);
//false

console.log(Object.is(amount,amount));
//true