function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    const a = function sayHello(){
        return 'Hello';
    }
    return a;
}
function returnsAnAnonymousFunction(){
    return function(){
        return 'hello';
    };
    
}