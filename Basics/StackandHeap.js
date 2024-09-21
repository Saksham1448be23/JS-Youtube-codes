// Stack(Primitive)-Jab bhi variable declare hoga uska copy milega
//Heap(Non-Primitive)-reference org value ka , jo bhi change hoga org value main hoga


//Primtive memory example

let myvs="sak";
let anotherName=myvs;
anotherName="atul ji";
console.log(myvs);  /* copy was given in thus change in other not affected its value */
console.log(anotherName);


// Heap memory  example
let user={
    email:"user@gmail.com",

}
let user2=user;
user2.email="changeit@gmail.com";
console.log(user.email);
console.log(user2.email);  /* The refrence was same, user and user2, thus channge in one lead to change in another */