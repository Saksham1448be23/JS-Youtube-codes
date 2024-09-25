// IMMEDIATE INVOKE FUNCTN

(function kiki(){
    console.log(`didi`);

})();
/*
()() -->(function define)(exection  call)  

ifi - global scope k pollution se problem hoti h kai baaar, uss scope k variable ko hatane k liye
 humne immediate invoke ka use kiya
*/

(()=>{
    console.log("lilili");
    
})();

((name)=>{
    console.log(`${name}`);
    
})("Kumar");