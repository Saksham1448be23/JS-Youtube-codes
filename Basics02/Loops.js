// for

for ( let index=0;index<10;index++){  // select word then ctrl + d 
    const element=index;               // sare wo edit kr sakte h
    console.log(element);
    
}

 let i=['sak','sham','tha','kur'];
 let c=0;
 while(c<i.length){
    console.log(`${i[c]}`);
    c++;
 }

 let score=1;
 do {
    console.log(`${score}`);
    score++;
    
 } while (score<=10);

 /******                   **************                 ******/

// FOR OF

const array=[1,2,3,4,5,6]
for (const element1 of array) {
   const square=(element1*element1);
   console.log(square);
   
}

// MAPS     Sets value in sichronised order

const map = new Map();
map.set('IN',"INDIA");
map.set('USA',"UNITED STATED OF AMERICA");
console.log(map);


const map2 = new Map();
map2.set('IN',"INDIA");
map2.set('USA',"UNITED STATED OF AMERICA");
for (const [key,value] of map2) {
   console.log(key,`--->`,value);
   
}


