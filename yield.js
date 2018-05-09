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