// console.log(2>1);   //true
// console.log(1==0); //false

// console.log("2"==1); false
// console.log("2">1);  true
// console.log("1"==1); true

// console.log(null>0);   //false
// console.log(null==0);   //false
// console.log(null<0);    //false
// console.log(null>=0);    true ,they both converted the null into number 0 thusthe command worked
// console.log(null<=0);    true

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);   all false
// console.log(undefined<=0);
// console.log(undefined=>0);  except  this will not print as its not a valid  parameter unknown

// === strict check --> check values and datatype match or not
console.log("2"==2);  //true value same but not checkin datatype
console.log("2"===2); //false as values issame but datatype not , both checking happens