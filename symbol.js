const CALCULATE_EVENT_SYMBOL = Symbol.for('calculate event');
let description = Symbol.keyFor(CALCULATE_EVENT_SYMBOL);
console.log(description);