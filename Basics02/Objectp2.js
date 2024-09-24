const regularuser={
    email:"h@gmail.com",
    fullname:{
        fname:"saksham",
        lname:"thakur"

    }
}
console.log(regularuser.fullname);

const obj1={ 1:"a",2:"b"};
const obj2={ 3:"a",4:"b"};

const obj3=Object.assign({},obj1,obj2);
console.log(obj3);


const obj4={...obj1,...obj2};       //spreaded obj1 and 2
console.log(obj3);

console.log(Object.keys(regularuser));

console.log(Object.values(regularuser));

console.log(Object.entries(regularuser));


