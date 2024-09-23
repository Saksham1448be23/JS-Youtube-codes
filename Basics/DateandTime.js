//  Dates
let mydate= new Date();
console.log(mydate); // full date and time
console.log(mydate.toString());
console.log(mydate.toDateString());      // Day Month Date Year
console.log(mydate.toLocaleString());    // month/day/y , time full   
console.log(typeof mydate); // object

let myc= new Date(2023, 0, 23,5,3); // (year,month,date,hour,min,sec)
console.log(myc);
const myccdate= new Date("01-14-2024");
console.log(myccdate.toLocaleString());


let myTimeSpan= Date.now();
console.log(myTimeSpan); // milisecond value till starting
console.log(myc.getTime()); 
console.log(Math.floor(Date.now()/1000));       //minutes
 
let ndate= new Date();
// console.log(ndate); // .getMonth() , .grtDay() 


console.log(ndate.toLocaleString('default',{
    weekday:"long"
}));
