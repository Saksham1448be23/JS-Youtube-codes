/*
Primitive
7 types: String , Number , null , undefined , Symbol , Bigint 

 Reference (Non primitive)

Array , object , Functions*/

const Id=Symbol('1222');
const anotherId=Symbol(1222);
// console.log(Id===anotherId); //False

const bignumber=54654164664n;
// console.log(bignumber); 

const heros=["shaktiman","naagraj"];
let myobj={
    name:"hitesh",
   age:22,
}
const myfuntn=function () {
    console.log("hello");
}
// console.log("hello");
myfuntn();
// after callinh the function will work