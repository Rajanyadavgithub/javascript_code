function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("N");
    
}
//console.log(sayMyName());


function addTwoNumber(number1,number2){
    
    //const sum = number1 + number2;
    return number1+number2;
    
}
//console.log(addTwoNumber(15,45));

//addTwoNumber(25,85);

const result = addTwoNumber(25,85)
//console.log(result);

// function counter(){
//     let count = 0;
//     return () =>count++;
// }
// let c=counter()
// console.log(c()); //0
// console.log(c()); //1
// console.log(c()); //2

function loginUserMassage(username){

    return`${username} just loged in`
}

// console.log(loginUserMassage("Rajan"));  //Rajan just loged in
// console.log(loginUserMassage(" "));      // just loged in
// console.log(loginUserMassage());      // undefined just loged in

function loginUserMassage(username){
   if(username===undefined){

    //console.log("Please enter username");
    return `${username} just loged in`

   }
}
//console.log(loginUserMassage());
function loginUserMassage(username){
    if(!username){
    console.log("please inter user name");
    }
}
//loginUserMassage();

function loginUserMassage(username="daby"){
    return `${username} just loged in`
}
console.log(loginUserMassage("Rajan"));