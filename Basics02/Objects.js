//  singleton 
// if we declare as literal singleton is not formed , but if we declare as constructor singleton is formed

// object literals
const  sym=Symbol("key1");

 const  Juser={
    name:"Saksham",//name as a string lega
    email:"s@gmail.com",
    [sym]:"mykey1",
    "fullname":"thakur",
    lastlogday:["Mon","Sat"]
 }

 console.log(Juser.name);
 console.log(Juser["fullname"]);
 console.log(Juser[sym]);
 console.log(typeof Juser[sym]);
 console.log(Juser["name"]);

 Juser.email="overwrittenit@gamil.com";
 console.log(Juser);
//  Object.freeze(Juser); we must undo it to change the object further
 Juser.email="more-overwrittenit@gamil.com"; //this not overwritten due to the freeze command
 console.log(Juser);

 Juser.greet=function(){
    console.log("Hi");
    console.log(`string interpollation,${this.name}`);
 }
 console.log(Juser.greet());



