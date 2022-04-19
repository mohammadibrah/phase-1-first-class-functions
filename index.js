function receivesAFunction (callPack){
    callPack();
}

function returnsANamedFunction(){
    return function named(){
        console.log('hello js');
    }
}
function returnsAnAnonymousFunction(){
    return () => console.log('hello js');
}