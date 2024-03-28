const obj = {
    js: "javascript",
    py: "Python",
    cpp: "C++",
    rb: "ruby",
    swift:"swift by apple"
}
for (const key in obj) {

    //console.log(key);
    
}

for (const key in obj) {

    //console.log(key,"=>",obj[key]);
    
}

for (const key in obj) {
   //console.log(`${key} shorcut is for ${obj[key]}`)
}

const programming = ["js","rb","py","java","cpp"]
  
for (const key in programming) {
    
    console.log(`${key} value of ${programming[key]}`)  // key print index of the array and programming[key] print the value of that index
    
}


//  note :-  In map for in loop are not iterable
