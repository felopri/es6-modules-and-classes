function* process() {
    try {
        yield 9000;
        yield 9001;
        yield 9002;
    } catch(e) {

    }
}
let it = process();
console.log(it.next().value);
//9000
console.log(it.return('foo'));
//{value: 'foo', done: true}
console.log(it.next());
//{value: undefined, done: true}