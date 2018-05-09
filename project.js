class Project {
    constructor(name) {
        this.location = 'Málaga';
    }
}
class SoftwareProject extends Project {
    constructor() {
        super();
        this.location = this.location + ' Beach';
    }
}
let p = new SoftwareProject();
console.log(p.location);
//Málaga Beach