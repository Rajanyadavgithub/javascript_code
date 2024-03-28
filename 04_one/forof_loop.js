//  for of loop

// [1,2,3,4,5,6,7,8,9,10]

//   [{},{},{}]

const arr= [1,2,3,4,5]

for (const num of arr) {

    //console.log(num);
    
}

const greetings = "hello world!"

for (const greet of  greetings) {

    //console.log(greet);
    

}

// map

const map =new Map()   //The set() method of Map instances adds or updates an entry in this map with a specified key and a value. And it is also has unique key and value.
 
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

//console.log(map);

//+++++++++  for of loop with map   +++++++++++++++++++++

for (const [key, value] of map) {
   // console.log(key,":-", value);
}



//+++++++ for of loop with object  (it is not iterable)  ++++++++++++++++++++

const obj= {
    "game1": "NFS",
    "game2": "spiderman"
}

for (const [key,value] of obj) {
    //console.log(key);
}

// object is not iterable


