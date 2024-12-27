const ticket = new Promise(function(resolve , reject){
    const isBoarded = false;
    if(isBoarded){
        resolve('you are not in flight')
    }
    else{
        reject('your flight has been cancelled')
    }
})