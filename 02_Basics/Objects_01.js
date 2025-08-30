//singleton - when objects are declared using constructor
// Object.create();

//objrct literals - when declared as literals then it is not singlrton
const mySym = Symbol("key1") // declaring a symbol

const JsUser={
    name:"Arnab",
    "full name":"Arnab Nayak",
    //mySym:"mykey1", // this is wrong type to add symbol as it is taken as a string not as a symbol
    [mySym]:"mykey1",// this is the correct syntax
    age:21,
    location:"Kolkata",
    email: "arnab01@google.com",
    isLoggedIn :false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof mySym)

JsUser.email ="arnab03@chatgpt.com"
//Object.freeze(JsUser) // it will not let anny changes further
JsUser.email="arnab03@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`); // this keyword is used to accesss the name of the JsUser object
}

console.log(JsUser.greeting); // function anonymus
console.log(JsUser.greeting()); // now it prints

console.log(JsUser.greetingTwo());




