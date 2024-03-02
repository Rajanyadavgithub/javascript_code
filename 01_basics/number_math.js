const score = 400

//console.log(score)     //400

const balance = new Number(100)
 
// console.log(balance);     //100

// console.log(balance.toString().length);   //3

// console.log(balance.toFixed(3));      //100.000  if parameter is 1 then output is 100.0

const otherNumber = 123.8766
// console.log(otherNumber.toPrecision(3));  //124  always return string value

const hundreds = 1000000
// console.log(hundreds.toLocaleString());         //standered american mathed   1,000,000
// console.log(hundreds.toLocaleString('en-IN'));   // Indian mathed      10,00,000



//++++++++++++++++  Math   ++++++++++++++++++++++++++++++++++++


// console.log(Math);    // Object [Math] {}

// console.log(Math.abs(-4));   // it is give the allways positive value

// console.log(Math.round(4.6));  //allways gives us rounded value   =5
// console.log(Math.ceil(4.2));   // allways gives us ceil(top) value  =5 
// console.log(Math.floor(4.9));  // allways gives us floor value   =4

// console.log(Math.min());
// console.log(Math.max());

// console.log(Math.random());      // its print the value between 0 to 1

// console.log(Math.random()*10);

// console.log((Math.random()*10)+1);  // 1 to 10 with decimal value

// console.log(Math.floor(Math.random()*10)+1);  // 1 to 10 with floor value



const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min)+min));

