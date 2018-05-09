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