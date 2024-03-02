//  ++++++++  date and time  +++++++++++++

let myDate = new Date()
// console.log(myDate);    //2024-03-02T12:01:12.548Z

// console.log(myDate.toString());    //Sat Mar 02 2024 12:01:12 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());  //Sat Mar 02 2024

// console.log(myDate.toLocaleString());    //  ==>  3/2/2024, 12:01:12 PM

//console.log(Date());         //Sat Mar 02 2024 12:04:31 GMT+0000 (Coordinated Universal Time)

let myCreatDate = new Date(2023,0,23)
//  console.log(myCreatDate);            //2023-01-23T00:00:00.000Z

//  console.log(myCreatDate.toDateString()); //Mon Jan 23 2023

//  console.log(myCreatDate.getTime());    //1674432000000



let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Date.now());

console.log(Math.floor(Date.now()/1000))





