for(let index=0;index<10;index++){
    const element = index
    //console.log(element)
}

for (let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        //console.log(i + " * " + j +"="+ i*j)
    }
}

let myArray = ["flash","batman","superman"]
//console.log(myArray.length)
for(let index=0;index<myArray.length;index++)
{
    const element= myArray[index]
    //console.log(element)
}

///++++++++++++   break and continue    ++++++++++++++++

for(let i=0;i<=20;i++){
    //console.log(i);
}

for (let i = 0; i <=20; i++) {
    if(i==5){
        //console.log(`detected 5`)
        break;
    }
    //console.log(`value of i is ${i}`)
    
}

for (let i = 0; i <=20; i++) {
    if(i==5){
        //console.log(`detected 5`)
        continue;
    }
    //console.log(`value of i is ${i}`)
    
}

///+++++++++++   while and do while loop    ++++++++++++++++

let index= 0;
while(index<=10){
    //console.log(`value of index is ${index}`)
    index= index+2
}

