//  array 
const myArr=[0,2,6,8,9];
// array always make shallow copy and have same refernce point
// deep copy don't sharw the same refernce
console.log("org :",myArr);
myArr.pop();        // pops element of last index
console.log(myArr);
myArr.push(10); //pushes it at last
console.log(myArr);

myArr.unshift(9);       //insert at start
console.log(myArr);
myArr.shift();       //removes from start
console.log(myArr);

console.log(myArr.includes(99)); //tells whether funtn is in array or not
console.log(myArr.indexOf(10)); // o is capital in it


myArr.shift();       //removes from start
console.log(myArr);
myArr.shift();       //removes from start
console.log("org next",myArr);
const myar= myArr.join();
console.log(myArr);
console.log(myar);  // string h ye

console.log("SLICE AND SPLICE");
console.log(myArr);
const myn1=myArr.slice(1,2);       // index x and y tak y include nhi hoga
console.log(myn1);
const myn2=myArr.splice(1,2);       // index x and y tak y include hoga , org array bhi manupulate krta h aur splice part ko nikal deta h array se 
console.log(myn2);