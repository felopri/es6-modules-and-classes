function doAsync() {
    let p = new Promise(function(resolve,reject) {
        console.log('in promise code');
        setTimeout(function() {
            console.log('resolving...');
            reject('Database Error');
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

