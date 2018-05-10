let employee1={name:'Jake'};
let employee2={name:'Janet'};

let employees = new Map();
employees.set(employee1,'ABC');
employees.set(employee2,'123');
console.log(employees.get(employee1));
//ABC