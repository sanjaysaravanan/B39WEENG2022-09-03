
// Join ---> Join the elements of the array with a pattern in-between
// const elements = ['Fire', 'Air', 'Water', 'Earth', 'Sky'];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"


// console.log(elements.join(''));

// console.log(elements.join('-'));

// console.log(elements.join(' '));

// const arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.join('**'));


// Push ---> insert an element at the end/next available index of the array
const arrTwo = [];

arrTwo.push('Fire');
arrTwo.push('Earth');
arrTwo.push('Air');
arrTwo.push('Water');

// Pop
const removedElement = arrTwo.pop(); // Removes the last element of the array returns the removed item

console.log(removedElement);

arrTwo.reverse(); // Reverses the enitre array

arrTwo.pop();

console.log(arrTwo);

const arrThree = [];

arrThree.pop();

const arrFive = [1, 2, 3, [[[4, 5, 6]]]];

console.log(arrFive.flat());


console.log("Level 2", arrFive.flat(2));
console.log("Level 3", arrFive.flat(3));

const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => num);

console.log(flattened);