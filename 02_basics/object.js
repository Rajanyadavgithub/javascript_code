
const mySym = Symbol("key1")
const obj = {
    name: "Rajan",
    age: 18,
    location: "Gr. Noida",
    email :"rajan@google.com",
    isLogedIn: false,
    lastLogedIn:["maonday","saturday"],
    "full name": "Rajan yadav",
    [mySym]:"mykey1"  //Symbol
}

//console.log(obj);
//console.log(obj["email"])

// console.log(obj["full name"]);
// console.log(obj[mySym]);        //Symbol data type 


obj.email = "rajan@chargpt.com"

Object.freeze(obj);
//console.log(obj);

obj.email = "rajan@google.com"
//console.log(obj);

obj.greeting = function() {
    console.log("hello obj");
}

console.log(obj.greeting);
//console.log(obj.greeting());




