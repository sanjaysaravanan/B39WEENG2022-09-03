// find ---> finding element in an array
const arrOne = [1, 2, 3, 4, 5, 6];

// find returns the first matching value
// find always return a single element of the array


// find the first element which greater than 3
console.log(arrOne.find((num) => num > 3));



const students = [
  { name: 'Sanjay', marks: 500 },
  { name: 'Sam', marks: 550 },
  { name: 'Saravanan', marks: 400 },
  { name: 'Danny', marks: 350 }
];


// find the student whose name is Sam
console.log(students.find((student) => student.name === "Sam"));
// {name: "Sam", marks: 450}

// find the student who got marks greate or equal to 500
console.log(students.find((student) => student.marks >= 500));
// {name: 'Sanjay', marks: 500}

// findIndex
// findIndex ---> finding an index of element in an array which match the condition
const arrTwo = [6, 5, 4, 3, 2, 1];
//              0  1, 2, 3, 4, 5
// findIndex returns index
// find always return an index element of the array

// 
console.log(arrTwo.findIndex((num) => num <= 4));

// find the index of the student whose name is Saravanan
console.log(students.findIndex(student => student.name === "Saravanan"));