const score=900;
const num= new Number(900); // now its a object and specified as number
console.log(score);
console.log(num);
console.log(num.toString().length);
console.log(num.length); // to string change wahin krega bs .. baad mein wo number mein hi aa jaega

const oonum=4353.998;

console.log(oonum.toPrecision(5)); // starting se jitne bhi value di h uss place tak ans dega
console.log(oonum.toLocaleString('en-IN'));

/*                            Math                  */
console.log(Math.abs(-5));  // converts to positive
console.log(Math.round(4.998));     // rounds off number
console.log(Math.ceil(4.988));  // give the top value of that integer size , if it had 4.2 value still the ans will be 5
console.log(Math.floor(4.9993));    //give lower round of that range
console.log(Math.max(2,5,3,6,7));  
console.log(Math.min(2,5,3,6,7));  


console.log(Math.random());
console.log((Math.random()*10)+ 1);
 const min=10;
 const max=20;

 console.log(Math.floor(Math.random() * (max - min + 1))+ min);// value max aur min k bich ki random value ko dega
