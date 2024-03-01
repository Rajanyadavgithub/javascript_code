//stack memory for primitive datatype and it is also called call by value
//heap memory for not primitive datatype and it is also called call by referance


//stack

let myYoutubeName = "rajanyadav"
let anotherName = myYoutubeName

//console.log(anotherName);

anotherName = "chai our code"

// console.log(myYoutubeName);
// console.log(anotherName);

//heap

let userOne = {
    email: "rajany8327@gmail.com",
    upi: "userone@ybl"
}

console.log(userOne.email);

let userTwo = userOne
 userTwo.email = "rajan@google.com"
  
 console.log(userOne.email);
 console.log(userTwo.email);


 /// both are referancing only one heap memory if any changed in userTwo variable then also change in userOne variable
