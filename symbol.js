const CALCULATE_EVENT_SYMBOL = Symbol.for('calculate event');
let description = Symbol.keyFor(CALCULATE_EVENT_SYMBOL);
console.log(description);
//calculate event

let article = {
    title: 'T3chFest 2018',
    [Symbol.for('article')]: 'My article'
}
let value = article[Symbol.for('article')];
console.log(value);
//My article

console.log(Object.getOwnPropertyNames(article));
//['title']

console.log(Object.getOwnPropertySymbols(article));
//[Symbol(article)]
