class Project {
    constructor(name) {
        console.log('constructing Project');
    }
}
class SoftwareProject extends Project {
    constructor() {
        super();
        console.log('constructing SoftwareProject');
    }
}
let p = new SoftwareProject();

//constructing Project
//constructing SoftwareProject