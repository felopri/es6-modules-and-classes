class Project {
    constructor() {
        console.log(new.target);
    }
}
class SoftwareProject extends Project {
    constructor() {
        super();
    }
}
var p = new SoftwareProject();
//cosntructor() {
//  super();    
//}