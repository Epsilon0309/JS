const course={
    name:"hello everyone",
    duration : 68,
    corseInstructor : "Sefali Srivastava"
}

//console.log(course.corseInstructor);

// object destructuring
const {corseInstructor : inst}= course // key:alias
console.log(inst);

// {
//     //json object
//     "name":"hitesh";
//     "courseName":"js"
// }