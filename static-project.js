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