const name="kkk";
const repo=90;
// console.log(name+repo+"value");//  outdated way of useing syntax use backsylash
console.group(`Hello my name is ${name} and repo is ${repo}`);
 const game= new String('Jitega'); // object banane k liye new use kiya h , aur ye stack memory h
 console.log(game[4]);

 console.log(game.length); // lenght of string game

const newgame= game.substring(0,2); //  (x,y) x=index of string ,y=the length 
 console.log(newgame);

const newgmae2=game.slice(-8,3); // x index value , y length
console.log(newgmae2);

const nw="   ggg   ";
console.log(nw);
console.log(nw.trim()); // starting and ending space ko kaat deta h trim()-- trimStart(),trimEnd();

// replace

const url="https://saksham.com//saksham%20thakur"     // browser spaces ko %20 mein change kr deta h 
console.log(url.replace('%20','replaceitdarling')); //   x=jisse replace krna h , y=jis se replace krwana h
console.log(url.includes('hihihi')); // tells wheathe rgiven thing is in string ot not
console.log(game.split('i')); // ye spliit kr dega puri string ko usse variable k basis pr wo ussi vribale
                             //ko hata deta  string se 
