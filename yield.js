function* process() {
    let result = yield;
    console.log(`result is ${result}`);
}
let it = process();
it.next();
//result is undefined
it.next(200);
//result is 200

console.log(it.next(200));
//{value: undefined, done: true}


function* processTwo() {
    let newArray = [yield, yield, yield];
    console.log(newArray[2]);
}
let it2 = processTwo();
it2.next();
it2.next(2);
it2.next(4);
it2.next(42);
//42

function* processThree() {
    let value = 4 * (yield 42);
    console.log(value);
}
let it3 = processThree();
console.log(it3.next());
//{value: 42, done: false}
it3.next(10);
//40


function* processFour() {
    yield 42;
    yield* [1, 2, 3];
}
let it4 = processFour();
console.log(it4.next().value);
//42
console.log(it4.next().value);
//1
console.log(it4.next().value);
//2
console.log(it4.next().value);
//3
console.log(it4.next().value);
//undefined
