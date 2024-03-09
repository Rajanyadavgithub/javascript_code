const tinderUser = new Object()
 
tinderUser.id = "123abc"

tinderUser.name = "Daby"
tinderUser.isLogedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userName:{
            firstName:"rajan",
            lastName:"yadav"
        }
    }
}
//console.log(regularUser.fullName.userName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {obj1,obj2}
//console.log(obj3);

obj4 =Object.assign({},obj1,obj2)
//console.log(obj4);
obj5={...obj1,...obj2}
//console.log(obj5);

// console.log(Object.keys(tinderUser));     //print keys.
// console.log(Object.values(tinderUser));      // print value.
// console.log(Object.entries(tinderUser));     // print keys and values on single array with the key and value.
// console.log(Object.hasOwnProperty("isLogedIn"));    //print ture/false if keys is availabe in the object or not.

////++++++++++++ Object destructure ++++++++++++++++++++++++++/////

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//console.log(course.courseInstructor);
const {courseInstructor:instructor}= course
console.log(instructor);

