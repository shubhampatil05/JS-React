// Function is defined with the function keyword followed by name followed by parenthesis()..

// Basic function..

function display() {
  console.log("Hello");
}

display(); // Calling function;

//  Function With Parameters..

function add(a, b) {
  console.log(a + b);
}

// we can call function saveral times..

add(12, 15);
add(19, 19);

//Function with return value..

function Info(fName, lName) {
  return fName + " " + lName;
}

console.log(Info("Shubham", "Patil"));

// Self-invoking Function..

// self-invoking function starded without being called..

// (function () {

//     console.log('This is a self invoking function');

// })
// ()

// Anonymous Function

let Show = function () {
  console.log("Anonymous Function");
};

Show();

// Closures

// The closure is a combination of a function and lexical envirement
// The inner function have a access of outer function as well as global veriable

let x = 100;
function Outer(y) {
  function Inner() {
    let sum = x + y;
    console.log(sum);
  }
  Inner();
}

Outer(10);

// Currying

// Example_1

function add(a, b, c) {
  return a + b + c;
}

let result = add(1, 2, 3);
console.log(result);

// Example_2

function Currying(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

let A = Currying(10);
let B = A(20);
let C = B(30);

console.log(C);

//or

let D = Currying(10)(20)(30);

console.log(D);
