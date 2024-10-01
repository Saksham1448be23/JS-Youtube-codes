 const sub=[ 1,2,3,4,5,6,7];
 const newsub=sub.filter( (num)=>{
    return num>4;
 })
 console.log(newsub);
 
 /*             MAP              */

 const sub2=[1,2,3,4,5,6,7];
 const newsub2=sub2.map( (n)=>{ return n+10;} )
 console.log(newsub2);

 /*              Reduce          */
 const mynums=[1,2,7,8];
//  const t=mynums.reduce(function(acc,curval){
//    console.log(`acc is : ${acc} and currrent value :${curval}`);
//    return acc+curval;
   
//  })
// console.log(t);

const t=mynums.reduce( (acc,valcur)=>acc+valcur,0)
console.log(t);




 