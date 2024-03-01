let name= "Rajan"
let age= 26
let isLogedIn = true

// console.table([name, age, isLogedIn])

// number ==> 2 to the power 53
// BigInt
// String ==> (2 to the power 53)-1
// boolean ==> true/false
// undefined
// null==>stand alone value , it is non negative value and not equal to zero
//symbol ==>is the set of all non-String values that may be used as the key of an Object 
//          property.Each possible Symbol value is unique and immutable.

// object

// console.log(typeof undefined) //undefined
// console.log(typeof null) //object
// console.log(typeof isLogedIn)//boolean
// console.log(typeof BigInt)  //function
// console.log(typeof Symbol)  //function

const id =Symbol('123')
const anotherId = Symbol('123')

//console.log(id===anotherId); //false because Symbol is a unique value

const bigNumber = 12345678945651425411984n
// console.log(typeof bigNumber); //bigInt


//+++++++++++++++++++ Non primitive  +++++++++++++++++++++


//  Array


const heros = ["saktiman", "naagraj","daga"]
// console.log(heros);
// console.log(typeof heros);  //object


//Object

const myObj = {
    name: "rajan",
    age : 27
}
// console.log(myObj);    //{name: rajan, age: 27}
// console.log(typeof myObj); //object

//function

const myfunction = function(){
    console.log("hello world")
}

myfunction()
console.log(typeof myfunction)







