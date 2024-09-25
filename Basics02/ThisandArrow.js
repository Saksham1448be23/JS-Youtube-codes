const user={
    usern:"Me",
    price:"999",

    welcome: function(){
        // console.log(`${this.usern}, welcome`);
        // console.log(this); // show the whole user elemnt reference 

    }
}
// console.log(this); // show the whole node reference , as nothing global in it so empty
// user.welcome();
// user.usern="Saksham";
// user.welcome();

function chai(){
    let usern="kiki";
    console.log(this.usern); // this only works in object
    
}
chai();

const add2= (n1,n2)=>{
 return n1+n2;                 // {} curly braces mein wrap kra to return dena padega 
                              // () in wrap kra to dene ki zarurat nhi
}
console.log(add2(4,8));
const add3= (n0,n1,n2)=>(n0+n1+n2);
console.log(add3(4,4,8));

/* lekin agr object return krna to to ({ object }) */
const retu=()=>({myname:"koko"})
console.log(retu().myname);


