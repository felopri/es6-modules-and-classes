let employee1={name:'Jake'};
let employee2={name:'Janet'};

let employees = new Map();
employees.set(employee1,'ABC');
employees.set(employee2,'123');
console.log(employees.get(employee1));
//ABC

employees.delete(employee2);
console.log(employees.size);
//1

let arr = [
    [employee1, 'ABC'],
    [employee2, '123']
];
let employees2 = new Map(arr);
console.log(employees2.size);
//2




//-------------WEAK MAP----------------

let employees3 = new WeakMap(arr);

employee1 = null;
//wait for GC

console.log(employees3.size);
//undefined