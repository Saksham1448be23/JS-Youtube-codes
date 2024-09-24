function cal(...n1){    // spread krdega wo n1 ko
    return n1
}
console.log(cal(200,400,500,600));      // isko string form mein krlega
const user={
    username:"Me",
    price:"199"
}

function handleObject(anyobject){   // function(keyword) handleObject(object)
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);  passing element in object.
// direct object paasing
handleObject({
    username:"New Me",
    price:"99999"
})

const myne=[200,400,500,800,900];
function returnval(getarrray){
    return getarrray[2];
}
console.log(returnval(myne));
