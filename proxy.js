function Employee(){
    this.name = 'Milton Waddams';
    this.salary = 0;
}
var e = new Employee();
var p = new Proxy(e, {
    get: function(target,prop,receiver){
        return "Attempted access: " + prop;
    }
});
console.log(p.salary);
//Attempted access: salary
var e2 = new Employee();
var p2 = new Proxy(e2, {
    get: function(target,prop,receiver){
        if(prop === 'salary'){
            return 'Denied';
        }
        return Reflect.get(target, prop, receiver);
    }
});
console.log(p2.salary);
//Denied
console.log(p2.name);
//Milton Waddams


