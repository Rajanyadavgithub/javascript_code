function calculatCartPrice(...val1){
    
    return val1;    
}
//console.log(calculatCartPrice(200,400,600,800,1000));

const user={
    username:"Rajan",
    price:399
}
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price ${anyobject.price}`);
// }
function handleObject(anyobject){
    console.log(`username is ${user.username} and price is ${user.price}`);
}
//handleObject(user);

const myNewArray = [200,400,600,800]
function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));


