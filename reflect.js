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