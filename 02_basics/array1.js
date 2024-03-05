const marval_heros =["thor","ironman","spiderman"]
const dc_hearos=["superman","batman","flash"]

//marval_heros.push(dc_hearos) //its  retrun the array with in array not in the form of single array means it is not concatination of the array
// console.log(marval_heros);  // ["thor","ironman","spiderman",["superman","batman","flash"]]

// console.log(marval_heros[3][2]);  //flash

const allArray= marval_heros.concat(dc_hearos)
//console.log(allArray);                           //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const all_new_heros =[...marval_heros,...dc_hearos]
//console.log(all_new_heros);                      //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1,2,3,4,[4,5],6,7,[6,7,[8,9]]]

const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array);                  //[  1, 2, 3, 4, 4,5, 6, 7, 6, 7,8, 9]

// concat() , three dot in square bracket[...variable1,...variable2,...etc], flat()
  
//   console.log(Array.isArray("Rajan")); //false
//   console.log(Array.from("Rajan"));    //[ 'R', 'a', 'j', 'a', 'n' ]

console.log(Array.from({name:"Rajan"}));

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));    //this methods return all value in single array



