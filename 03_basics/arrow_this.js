const user={
    username: "Rajan",
    price: 999,
    welcomeMessage:function welcomeMessage(){
    //     console.log(`${this.username} welcome to website and your course prince is ${this.price}.`);
    // console.log(this);
    }
}
user.welcomeMessage();
// output
// Rajan welcome to website and your course prince is 999.
// {
//   username: 'Rajan',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
user.username= "Daby"
user.price= 799
user.welcomeMessage()
// output
// Daby welcome to website and your course prince is 799.
// {
//   username: 'Daby',
//   price: 799,
//   welcomeMessage: [Function: welcomeMessage]
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//console.log(this)  //{}  empaty object in node js

//But in the browser console.log(this) the output is "window object global"

function chai(){
    //console.log(this)
}
//chai(); //object [golbal]

function chai(){
    let username= "Rajan"
    console.log(this.username)
}
//chai();    //  undefined

const chaiour= function our(){
    let username= "Rajan"
    //console.log(this.username)

}
chaiour();  //undefined



//++++++++++++++++   Arrow function ++++++++++++++++++++++++++++++++++++++

// dicleration   () =>{}



const chaiourcode= ()=>{
    let username = "Rajan"
    console.log(this.username);
}
//chaiourcode()
 
// const addTwo = (num1, num2)=>{
//     return num1+num2     //explicit return in arrow function if we use curly braces then we usereturn keyword 
// }


// const addTwo = (num1,num2)=> num1+num2
// const addone = (num1,num2)=> (num1+num2)  // implicit retrun in this type return we can't use return keyword in the both case aboce

// console.log(addTwo(84,75));
// console.log(addone(84,75));
const addTwo = (num1,num2)=>({username:"Rajan"})
console.log(addTwo(5,2));








