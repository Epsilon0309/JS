const myArr = [1, 2, 3, 4, 5, 6, 7];
const myHeroes = ["Iron man", " Thor", "Captain America"];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[2]);
// console.log(typeof(myArr2)); //object

// myArr2.push(5); // adds the value at the end
// myArr2.pop();// removes the value whichever is at the last
// myArr2.unshift(0);// adds the number in the starting of the array
// myArr2.shift();// removes from the start

// console.log(myArr2);

// console.log(myArr.includes(6)); // returns a boolean value
// console.log(myArr.indexOf(3));

 const newArr = myArr.join()// joins every element of the array to a string
// console.log(newArr);
 console.log(typeof(newArr));

//slice and splice
console.log("A",myArr);

const myN1 = myArr.slice(1,3)
console.log(myN1); // [2,3]
console.log("B",myArr); //  B [1,2,3,4,5,6,7]

const myN2 = myArr.splice(1,3)
console.log(myN2); //[2,3,4]
console.log("C",myArr); //C [ 1, 5, 6, 7 ]

// slice just cuts the section and prints it without including the last index
// splice cuts the section and maipulates the array



