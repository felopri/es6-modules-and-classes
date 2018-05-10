let perks=new Set();
perks.add('Car');
perks.add('Super Long Vacation');
perks.add('Car');
console.log(perks.size);
//2

console.log(perks.has('Car'));
//true
console.log(perks.has('Jet'));
//false

console.log(...perks.entries());
//["Car","Car"], ["Super Long Vacation","Super Long Vacation"]


let mySet = new Set([
    {id: 800},
    {id: 800}
]);
console.log(mySet.size);
//2