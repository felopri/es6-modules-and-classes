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