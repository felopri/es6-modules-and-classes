class Project {
    static getDefaultId (){
        return 7;
    }
}
console.log(Project.getDefaultId());
//7

let p = new Project();
console.log(p.getDefaultId());
//Error: Object doesn't support getDefaultId

Project.id=99;
console.log(Project.id);
//99