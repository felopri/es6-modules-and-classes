class ExtArray extends Array {
}
let a = ExtArray.from([5, 10, 15]);
console.log(a instanceof ExtArray);
//true


class Perks extends Array {
    sum() {
        let total=0;
        this.map(v=>total+=v);
        return total;
    }
}
let b=Perks.from([5,10,15]);
console.log(b.sum());
//30