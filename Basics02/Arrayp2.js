const a=[1,2,4,5,3,455];
const b=[44,55,22,44,0];
const c=a.concat(b);
console.log(c);

const e=[[1,2,4],55,33,45,[33,55,54,[45353,23434,23423]]];
const full=e.flat(Infinity);
console.log(full);

console.log(Array.isArray("hitesh"));

console.log(Array.from("hitesh"));
console.log(Array.isArray({name:"hitesh"}));  //intresting

let score=100,score2=200,score3=300;
console.log(Array.of(score,score2,score3)); // makes the array of va