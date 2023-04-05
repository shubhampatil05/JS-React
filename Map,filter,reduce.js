//** Map,Filter And Reduce are a higher order functions..

// 1)--Map
// it is used to transform an array and get new array out of it

// let arr = [5, 6, 7, [8], 9];

// const transForm = (val) => {
//   return val * 2;
// };

// const res = arr.map(transForm);

// console.log(res);

//---------------------

// this is same as above.

// const res = arr.map((val) => {
//   return val * 2;
// });

// console.log(res);

//---------------------

// if we returning single line then we dont have to write return keyword

// const res = arr.map((val) => val * 2);
// console.log(res);

//---------------------

// const findBinary = (val) => {
//   return val.toString(2);
// };

// const res = arr.map(findBinary);
// console.log(res);

//---------------------------------------------------------------

// 2)-- Filter
// It is use to filter an Array

// let arr = [5, 6, 7, 8, 9];

// const odd = (val) => {
//   return val % 2 == 0;
// };

// const res = arr.filter(odd);

// console.log(res);

//---------------------------------------------------------------

// Reduce)--
// It takes all the element of an array and comes with the single value
// Basically it reduces array into single value

// let arr = [5, 6, 7, 8, 9];

// // before reduce

// function Reduce(ar) {
//   let sum = 0;

//   for (i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   return sum;
// }

// console.log(Reduce(arr));

//---------------------------

// With Reduce

// the function inside reduce takes two parameter,The first one is Accumulator and Second is Current value..
// And reduce takes two arguments first is a function and second initial value which is deirectly pass in acc

// const res = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(res);

// Lets take a Another Example

// let arr = [1, 4, 5, 7, 8];

// Find the maximun value in array

// function maxValue(ar) {
//   let max = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(maxValue(arr));

// Now check with the reduce function

// const res = arr.reduce((max, curr) => {
//   if (curr > max) {
//     max = curr;
//     return max;
//   }
// }, 0);

// console.log(res);

// We are done with the Map,Filter and Reduce

//-----------------------------------------------------

// Question for Ankur the Developer And Virag The Developer..

const data = [
  { Name: "Virag", Age: 28, City: "Dhule" },
  { Name: "Ankur", Age: 27, City: "Nagpur" },
  { Name: "Shubham", Age: 25, City: "Nanded" },
  { Name: "Krishna", Age: 28, City: "Beed" },
  { Name: "Omprakash", Age: 36, City: "Nanded" },
];

// 1)--Find the occurance of age the o/p should be {28:2,27:1,25:1,36} like this..
// 2)--Get the Name whom have a age greater than or equal to 28.. o/p should be [Virag,Omprakash,Krishna]

const rslt = data.reduce((acc, curr) => {
  if (acc[curr.Age]) {
    acc[curr.Age] = acc[curr.Age];
    +1;
  } else {
    acc[curr.Age] = 1;
  }
  return acc;
}, {});

console.log(rslt);

//-------------------------------------------------------

// Now we are moving on to For of loop And For in loop

//1)--For In Loop

// for in is used to iterate the properties of object.. and it allow us to access the keys of an Object

//for in for inumurate/calculate the properties of Object
// for in for an Array to iterate the keys

// lets gets the keys of obj

// const obj = { Name: "Jenny", City: "London" };

// for (let key in obj) {
//   console.log(key);
// }

//----------------------------------------------

// with array

// let ar = [85, 595, 59];

// for (let index in ar) {
//   console.log(index);
// }

// with string

let str = "Shubham";

for (let key in str) {
  console.log(key);
}

//----------------------------------

// For Of..
// it is used for Array and String to iterate the values
