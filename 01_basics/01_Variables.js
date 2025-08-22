const accountID = 12345
let accountEmail = "ar@an.co"
var accountPassword = "2398"
accountLocation = "egra"

let accountState; // the value will be shown as undefined

//accountID cann't be changed
accountEmail="ajdsbbbb@kd"
accountLocation = "bengaluru"
let myObject;
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
// console.table([accountID,accountEmail,accountPassword,accountLocation,myObject])


let temp = null;

// console.log(typeof(temp));

// primitie datatypes are stored in the stack apce and nonprimitive data types are stored in the heap space 
// while calling the primitive types it passes a copy of that value
// but in case of non-primitivr it passes the reference i.e the location

let sampleObject = {
    age:23,
    number:1425367
}

let sampleObject2= sampleObject;
sampleObject2.age=24;
console.log(sampleObject.age);
console.log(sampleObject2.age);

