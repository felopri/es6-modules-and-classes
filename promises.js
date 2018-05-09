function doAsync() {
    let p = new Promise(function(resolve,reject) {
        console.log('in promise code');
        setTimeout(function() {
            console.log('resolving...');
            reject();
        },2000);
    });
    return p;
}
doAsync().then(function(){
    console.log('Fullfilled');
}, function(){
    console.log('Rejected!')
});