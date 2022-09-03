// Immediately Invoked Function Expression (Invoking happens in the same line of the definition)

function SampleFunc() {
  console.log('Hello Worl')
}

console.log(SampleFunc);

SampleFunc(); // Function calling / invoking

// function which does not have any name is called anonymous function
console.log(function () {
  console.log("Hello World 2");
});

// Left Side   = Right Side
var SamplFunc2 = function () {
  console.log("Hello World 2");
};

console.log(SamplFunc2);
SamplFunc2(); // calling / invoking 


// anonymous assigned to variable/let/const
var Sum = function (a, b) {
  console.log(a + b);
}

Sum(1, 10); // invoking / calling

// IIFE ---> Immediately Invoked Function Expression
(function () {
  console.log("I am an anonymous function without any name")
})();

(function (a, b, c) {
  console.log("Sum is", a + b + c);
})(10, 30, 40);

console.log("Sum is", 10 + 30 + 40);