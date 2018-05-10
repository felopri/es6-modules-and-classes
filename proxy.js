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