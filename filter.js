// array.filter ---> filtering only the array element that is needed

const arrOne = [1, 2, 3, 4, 5, 6];

// Print only the evene elements
// Output: [2, 4, 6]


// Normal
// var resultArr = [];
// var i = 0;

// for (var element of arrOne) {
//   if (!(element % 2)) { // 1 % 2 
//     resultArr[i] = element;
//     i = i + 1; // determining the next index for new array
//   }
// }

// console.log(resultArr);

// Filter [1, 2, 3, 4, 5, 6]
// Filter accepts a function which will each element and will return true or false
// based on this true or false the elements will be filtered
// Return type of filter will always be an array
// Filter using Arrow function
console.log(arrOne.filter((element) => element % 2 === 0)); // [2, 4, 6]

// filter normal anonymous function
console.log(arrOne.filter(function (element) {
  return element % 2 === 0;
}));



const students = [
  { name: 'Sanjay', marks: 500 },
  { name: 'Sam', marks: 450 },
  { name: 'Saravanan', marks: 400 },
  { name: 'Danny', marks: 350 }
];

// Filter all the students whose mark is greater than or equal to 450
// [{ name: 'Sanjay', marks: 500 }, { name: 'Sam', marks: 450 },]

// Filtering an array  of objects

console.log(students.filter(function (student) {
  return student.marks >= 450;
}))


// Filter all the students whose mark is less than 450
// [{ name: 'Saravanan', marks: 400 }, { name: 'Danny', marks: 350 }]

// use arrow function
console.log(
  students.filter((student) => student.marks < 450)
)