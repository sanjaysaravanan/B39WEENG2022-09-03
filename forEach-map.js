// forEach

const arrOne = [1, 2, 3, 4, 5, 6];

// Iterate the array and print the sqaure of each element
/**
 * 1
 * 4
 * 9
 * 16
 * 25
 * 36
 */

// For Each using an arrow function
// arrOne.forEach((num) => {
//   console.log(num * num);
// });

// // forEach using an anonymous function (function wihtout any name)
// arrOne.forEach(function (num) {
//   console.log(num * num);
// });

// // const squareNum = (num) => {
// //   console.log(num * num);
// // }
// function squareNum(num) {
//   console.log(num * num);
// }

// // forEach using a named function
// arrOne.forEach(squareNum);


const arrTwo = [6, 1, 5, 2, 4, 3];
//              0, 1, 2, 3, 4, 5
// print all the element, index using forEach
/**
 * element, index
 * 6 0
 * 1 1
 * 5 2
 * 2 3
 * 4 4
 * 3 5
 */


// Return Type for forEach ---> undefined

// console.log(arrTwo.forEach((num, x) => {
//   console.log(num, x);
// }));


const students = [
  { name: 'Sanjay', marks: 500 },
  { name: 'Sam', marks: 550 },
  { name: 'Saravanan', marks: 400 },
  { name: 'Danny', marks: 350 }
];


// Print the Output in the following format
/**
 * 1. Sanjay scored 500
 * 2. Sam scored 550
 * .
 * .
 * 4. Danny scored 350
 */

// Array of Object (Possibility of destructure)
// Non Destrucute Version
// students.forEach((student, index) => {
//   console.log(`${index + 1}. ${student.name} scored ${student.marks}`);
// });

// // Destructure Version
// students.forEach(({ name, marks }, index) => {
//   console.log(`${index + 1}. ${name} scored ${marks}`);
// });


// MAP ---> Used to create a new array which uses function with return type
// Special feature creating new array
const arrThree = [6, 1, 5, 2, 4, 3];

// Create a new array which contains the square of each element
// Output: [36, 1, 25, 4, 16, 9]

// Map Return type an array of same length
// Return keyword
const squareArr = arrThree.map((num) => {
  return num * num;
});

console.log(squareArr);

// Non Return keyword (single statement) arrow directly pointing to a value or statement
const squareArrTwo = arrThree.map((num) => num * num);
console.log(squareArrTwo);


// main difference between forEach and Map
/**
 *  forEach --->
 * 1. simply iterates and executes the passed function
 * 2. No Return type
 *
 *  map
 * 1. iterates and accumulated the return of the passed function into a new Array. if no return in the function then undefined will be accumulated as new array
 * 2. Return an array same length
 */









