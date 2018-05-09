class Project {
    constructor(name) {
        let location = 'Málaga';
    }
}
class SoftwareProject extends Project {
    constructor() {
        super();
    }
}
let p = new SoftwareProject();
console.log(p.location);
//undefined