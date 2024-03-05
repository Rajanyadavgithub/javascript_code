//const arr = [0,1,2,3,4,5]

//console.log(arr);

//const myArray = new Array(0,1,2,3,4,5)
 //console.log(myArray[1]);

 //++++++++ methods  ++++++++++++++//

 //myArray.push(6)    // add value at last of index of the array
//  console.log(myArray)

//  console.log(myArray.pop());  //removed value from at last index of the array

//  console.log(myArray);

// myArray.unshift(8);  // add value starting of the array and all element shifted next position
// // console.log(myArray);

// myArray.shift();   //remove balue form starting of the array
// console.log(myArray);


// console.log(myArray.includes(9));   // its given true or false value  //false
// console.log(myArray.includes(4));   // its given true or false value  //true


//console.log(myArray.indexOf(3));     //3
// const newArray =  myArray.join()    // its return array of string
//  console.log(myArray);              //[0,1,2,3,4,5]   Array
//  console.log(newArray);             // 0,1,2,3,4,5    string
//  console.log(typeof newArray)       //  string

//+++++++++++++ slice and splice method   ++++++++++++++++


// console.log("A",myArray);

// const myn1 = myArray.slice(1,3) // slice mathod return the range of index 1 to 2 and not includs index 3 and no change of original array
// console.log(myn1);             //[1,2]
// console.log("B", myArray);     //[0,1,2,3,4,5]

// const myn2 = myArray.splice(1,3)  // But  in the splice method range will be included and also change the original array
// console.log(myn2);                // [1,2,3]
// console.log("C", myArray);        // [0,4,5]


const newArray = [1,2,3,4,5,6,7]

// console.log(newArray.lastIndexOf(4));   // 5

//console.log(Array.isArray(new Array(1)));   // true

console.log(Array.isArray([1]));

