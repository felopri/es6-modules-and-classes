class Restaurant{
    constructor(){
        this._id=900;
    }
    get id(){
        return this._id;
    }
}
let r = new Restaurant();
console.log(Reflect.get(r, 'id', {_id:88}));
//88



class RestaurantTwo{
    constructor(){
        this._id = 900;
    }
    set id(value){
        this._id = value;
    }
}
let r2 = new RestaurantTwo();
let alt = {id: 88};
Reflect.set(r2, 'id', 88, alt);
console.log(r2._id);
//900
console.log(alt._id);
//88



let rest={
    id:2000
};
console.log(Reflect.isExtensible(rest));
//true
Reflect.preventExtensions(rest);
console.log(Reflect.isExtensible(rest));
//false
