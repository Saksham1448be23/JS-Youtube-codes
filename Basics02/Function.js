function sayn() {
  console.log("l");
     
}
sayn();     //calling

function add2num(n1,n2){
console.log(n1+n2);

}
add2num(2,4);
add2num(2,"4");
add2num("2","4");
add2num("2",4);

function log(usern){
    if(usern===undefined){  //(!username) = (username ===undefined) ; we can set a default value (username =9)
        console.log("Please enter username");
        return ;
    }
    return `${usern} just logged in`;
}

console.log(log("Me"));     // parameter pass kiya to chal diya , agr empty chordte to unndefined ata value