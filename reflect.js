class Restaurant{
}
let setup={
    getId(){
        return 88;
    }
}
let r = new Restaurant();
Reflect.setPrototypeOf(r,setup);
console.log(r.getId());
//88