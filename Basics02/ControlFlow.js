/*
if (condition) {
    
}
// falsy statement
false,0,-0,bigint On,"",null,undefined,NaN

// truthy values
"0",`false`," ",[],{},function(){}

*/

// Nullish Coalescing Operator (??):null undefined
let val1;
val1=10 ?? 5;
let val2=null ?? 8; // ye two value to leta h agr first value null ya undefined aa gyi to ye second value ko output de deta h
let val3=null ??10 ??4;
console.log(val1);
console.log(val2);
console.log(val3);

//  Terniary Operator
// Condition ? true : false

const price=10;

const result=price >= 60 ? true : false;
console.log(result);
