const appleUser = new Object();
// creates an empty object but using the singleton pattern
// ie. using constructors
appleUser.id = 12345;
appleUser.name = "Arnab";
appleUser.isLoggedIn = false;

// console.log(appleUser)

const normalUser = {
  greetings: {
    fullName: {
      firstName: "Arnab",
      lastName: "Nayak",
    },
  },
};

//console.log(normalUser.greetings.fullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

//const obj4 = {obj1,obj3} // it will create object inside object

// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = { ...obj1, ...obj2, ...obj3 }; // flattenning 

// first {} is used for the output to make sure it is an object
//console.log(obj4);

const obj5 = [
  {
    email: "abc.def",
    phone: 122334,
  },
  {
    email: "abc.defg",
    phone: 122334,
  },
  {
    email: "abc.defgh",
    phone: 122334,
  },
];

// console.log(obj5[1].email);

console.log(Object.keys(appleUser)); // returns an array of the keys
console.log(Object.values(appleUser)); // returns an array of the values
console.log(Object.entries(appleUser)); // returns an array of the key-value pairs

