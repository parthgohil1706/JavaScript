// Immediate Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);    //name iife
})();

((name) => {
    console.log(`DB CONNECT ${name}`);     
})("Parthsinh")