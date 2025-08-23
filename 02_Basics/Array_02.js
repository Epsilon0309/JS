const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros= ["superman","batman","flash"]

// marvel_heros.push(dc_heros); // array inside another array
// console.log(marvel_heros);

// const allHeros =marvel_heros.concat(dc_heros); // all the elements of the two arrays
// console.log(allHeros);

//const all_new_heros = [...marvel_heros,...dc_heros] // spread operator
//console.log(all_new_heros); // convets array into individual elements

// const another_array = [1,2,3,[4,5,6],7,[8,[9,10]]]
// const real_another_array = another_array.flat(Infinity); // flatten the array into single elements and combine them in one array

// console.log(real_another_array);

// console.log(Array.isArray("arnab"));
// console.log(Array.from("arnab")); //separates array into letters
// console.log(Array.from({name:"arnab"})); // it returns an empty object

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


