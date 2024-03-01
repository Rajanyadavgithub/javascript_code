//string

// console.log("hello" + "world");


const name = "rajan"
const repCount = 50 
//console.log(name + repCount);

// +++++++++++it is called string interpulation  ++++++++++++++++++++++++++++

//console.log(`Hellog my name is ${name} and my repo count is ${repCount}`);

const gameName = new String('rajan-yb')
// console.log(gameName[0]);            //r

// console.log(gameName.__proto__);     //{}

// console.log(gameName.length);        //8

// console.log(gameName.toUpperCase()); //RAJAN-YB

// console.log(gameName.charAt(2));  //j

// console.log(gameName.indexOf('j'));  //2

const newString = gameName.substring(0,4)
//console.log(newString);                      // raja

const anotherString = gameName.slice(-7,4)
//console.log(anotherString);                  //aja


const newStringOne = "   rajan  "
console.log(newStringOne);     //   rajan
console.log(newStringOne.trim());  //rajan

const url = "https://rajan.com/rajan%20yadav"
console.log(url.replace('%20','-'));       //https://rajan.com/rajan-yadav

console.log(url.includes('rajan'));    //true
console.log(gameName.split('-'));      //'rajan','yb'
