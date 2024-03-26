const userEmail = "rajan.ai"

// if(userEmail){
//     console.log("got user e-mail.")
// }
// else{
//     console.log("don't have user e-mail.")
// }

///   +++++++   falsy value    ++++++++++++++

/////  false, 0, -0, bigInt 0n, ""(without space), null, undefined, nan

/// ++++++    truthy value   ++++++++++

/////  "0", "false", " "(with space), [], {},funtion(){}


// checking array

if (userEmail.length===0){
    //console.log("array is empaty")
}

const emptyObj ={}

if (Object.keys(emptyObj).length===0){
    //console.log("object is empty");
}

  /////    false==0   => true
  ////     false==""  =>true
  ////     0==''     =>true

//   if(false=={}){
//     console.log("hello")
//   }

// nullish coalescing operator (??): null, undefined  ++++++++++++++++++++++++++++++++++++++++

let val1;
val1=5??10
//console.log(val1)
let val2 = null??100
//console.log(val2)
val2 = undefined?? 15
//console.log(val2)


// ++++++++  ternary operator

//condition?true:false


const iceTeaPrice = 1000
iceTeaPrice<=800?console.log("less than 800"):console.log("more than 800");
