function doAsync() {
    let p = new Promise(function(resolve,reject) {
        console.log('in promise code');
        setTimeout(function() {
            console.log('resolving...');
           // reject('Database Error');
        },2000);
    });
    return p;
}
doAsync().then(function(value){
    console.log('Fullfilled! '+ value);
}, function(reason){
    console.log('Rejected! '+ reason)
});
//in promise code
//resolving...
//Rejected! Database Error


function doAsyncTwo() {
    //return Promise.resolve('Some String');
    return Promise.reject('Some Error');
}
doAsyncTwo().then(function(value){
    console.log('Ok: '+ value);
}, function(reason){
    console.log('Nope: '+ reason)
});
//Nope: Some Error


let p1 = new Promise((resolve, reject)=>{
    setTimeout(function() {resolve();}, 3000);
});
let p2 = new Promise((resolve, reject)=>{
    setTimeout(function() {resolve();}, 9000);
});
Promise.race([p1,p2]).then(
    function(value){console.log('Ok')},
    function(reason){console.log('Nope')}
);
//(3 seconds delay)
//Ok
