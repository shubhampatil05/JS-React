// Write a function that would allow you to di this

// function addSix(a) {
//   console.log(a + 6);
// }

// addSix(10);
// //----------------------------

//  Write a code for star Pattern

// let pattern = "";

// for (let i = 1; i <= 5; i++) {
//   let pattern = "";

//   for (let j = 1; j < i; j++) {
//     pattern += "*";
//   }
//   console.log(pattern);
// }
//----------------------------

// Write a function that replace all occurance of string in an array with another string

// const arr = ["apple", "banana", "orange", "banana"];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === "banana") {
//     arr[i] = "kiwi";
//   }
// }
// console.log(arr);

//----------------------------

// Write a closure

// let a = 10;

// function add() {
//   let b = 10;

//   return function () {
//     console.log(a + b);
//   };
// }

// let res = add();
// res();

//----------------------------

//  write a function that finds a longest word in a srting

// let str = "hello world it is beutiful day";

// function longestWord(str) {
//   let toArry = str.split(" ");

//   let longest = "";
//   for (i = 0; i < toArry.length; i++) {
//     if (toArry[i].length > longest.length) {
//       longest = toArry[i];
//     }
//   }
//   return longest;
// }
// console.log(longestWord(str));

//----------------------------

//  find the second smallest value in a given array

// let findSmallest = [3, 4, 6, 2, 4, 9];
// let sortedArr = findSmallest.sort((a, b) => b - a);

// console.log(sortedArr[sortedArr.length - 2]);

//----------------------------

//  Apply the map,filter and reduce method on given array

// let array = [1, 2, 3, 4, 5, 6];

// let Map = array.map((item) => {
//   return item * 2;
// });

// let Filter = array.map((item) => {
//   return item > 5;
// });

// let Reduce = array.map((acc, curr) => {
//   return (acc += curr);
// }, 0);

//----------------------------

//  sum of array of nnumber by adding 1 to each

// let Sum = [1, 2, 3, 4];

// let count = 0;
// for (i = 0; i < Sum.length; i++) {
//   count += Sum[i] + 1;
// }

// console.log(count);

//----------------------------
//  Addition of numbers in string

// let addition = "abcd2345";

// let newArr = [];

// let splited = addition.split("");
// for (i = 0; i < splited.length; i++) {
//   if (!isNaN(Number(splited[i]))) {
//     newArr.push(splited[i]);
//   }
// }

// let result = 0;

// for (i = 0; i < newArr.length; i++) {
//   result += Number(newArr[i]);
// }
// console.log(result);

//----------------------

//  Solve the array // op = "4","3","2","1"

// let arry = [1, 2, 3, 4];
// let reversedArry = arry.reverse();
// let output = reversedArry.join(",");
// console.log(output);

//-------------------------------------------------------------------

//  find the prime number up to 20

// let primeNumbers = [];

// for (i = 2; i <= 20; i++) {
//   for (j = 2; j < i; j++) {
//     if (i % j == 0) {
//       break;
//     }
//   }

//   if (i == j) {
//     primeNumbers.push(i);
//   }
// }
// console.log(primeNumbers);

//----------
// Another method..

// let arr = [2, 3, 5, 7];

// for (i = 2; i <= 20; i++) {
//   if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

//------------------------------------

// flat the array without using inbuilt methods

// let arry = [1, [2, 3], [4, [5, 6]], 7];

// let flatted = [];

// function flattenArr(arr) {
//   arr.forEach((ele) => {
//     if (typeof ele == "object") {
//       flattenArr(ele);
//     } else {
//       flatted.push(ele);
//     }
//   });
// }

// flattenArr(arry);
// console.log(flatted);

//------------------------------------

// Create a function that returns a longest common prefix

// let arry = ["flower", "flow", "flight", "float"];

// function findLongestPrefix(arr) {
//   let prefix = arr[0];

//   for (i = 1; i < arr.length; i++) {
//     while (arr[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//     }
//   }
//   return prefix;
// }

// console.log(findLongestPrefix(arry));

//------------------------------------

// Print the *** at the end of string

// let str = "abc";

// console.log(str.concat("***"));

//------------------------------------

// Createa function that removes duplicate character from a string

// let str = "hello world";
// let res = "";

// for (i = 0; i < str.length; i++) {
//   if (res.indexOf(str[i]) < 0) {
//     res += str[i];
//   }
// }

// console.log(res);

//------------------------------------

//  Print the array of string on to objects in the form of key value pair
// optput should be
// [
//   {
//     name: "jane",
//     value: "1",
//   },
//   {
//     name: "doe",
//     value: "2",
//   },
// ];

// const arr = ["jane:1", "doe:2"];

// let res = arr.map((item) => {
//   const [name, value] = item.split(":");
//   return { name, value };
// });

// console.log(res);

//--------------------------------

// Find the duplicates in the given array

// let arr = [10, 20, 30, 10, 40, 50, 20];

// let res = [];

// for (i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       res.push(arr[i]);
//     }
//   }
// }
// console.log(res);

//--------------------------------

// // Reverse the string

// let str = "Good Morning";

// // using inbuilt method

// // let arr = str.split("").reverse().join("");
// // let res = arr.split(" ").reverse().join(" ");
// // console.log(res);

// // -------------

// // let's split the string
// let arr = [];
// let store = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     arr.push(store);

//     store = "";
//   } else {
//     store += str[i];
//   }
// }
// arr.push(store);

// // ab isko reverse karenge
// let revStr = "";

// for (j = 0; j < arr.length; j++) {
//   let ele = arr[j];

//   for (k = ele.length - 1; k >= 0; k--) {
//     revStr += ele[k];
//   }
// }
// console.log(revStr);

//----------------------------------------

// Concat the nested arr without using inbuilt method

// let arry = [1, 2, [3, 4, [5, 6], 8], 9];

// let res = [];

// forEach

// function flattenArr(arr) {
//   arr.forEach((item) => {
//     if (typeof item === "object") {
//       flattenArr(item);
//     } else {
//       res.push(item);
//     }
//   });
// }

//----------------------

//-------------------------------------

// For Of

// function flattenArr(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "object") {
//       flattenArr(arr[i]);
//     } else {
//       res.push(arr[i]);
//     }
//   }
// }
// flattenArr(arry);
// console.log(res);

//--------------

// let arr = [1, 2, [3, 4, [5, 6], 8], 9];

// let myArray = [];

// let out = JSON.stringify(arr);

// for (let i = 0; i < out.length; i++) {
//   if (out[i] !== "[" && out[i] !== "]" && out[i] !== ",") {
//     myArray.push(JSON.parse(out[i]));
//   }
// }
// console.log(myArray);

//---------------------------------------

// Write a example for promise

// new Promise((resolve, reject) => {
//   resolve("Promise Resolved");
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//---------------------------------------

// check weather a2 is subset of a1

// let a1 = [11, 1, 13, 21, 7, 3];
// let a2 = [11, 3, 7, 1];

// let res = a2.every((ele) => {
//   if (a1.includes(ele)) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(res);

//---------------------------------------

// Find the non-repeating charecter of given string

// let str = "abczabcbb";

// let result = "";

// for (i = 0; i < str.length; i++) {
//   let newStr = "";

//   for (j = 0; j < str.length; j++) {
//     if (newStr.indexOf(str[j]) < 0) {
//       newStr += str[j];
//     }
//   }

//   if (newStr.length > result) {
//     result = newStr;
//   }
// }

// console.log(result.length);

//---------------------------------------

// Merge two arrays without duplicate values

// let a1 = [1, 2, 3];
// let a2 = [3, 4, 5];

// let a3 = [...a1, ...a2];

// console.log(Array.from(new Set(a3)));

//----------------------------------------

// Create a function that removes whiteSpace from a string

// let str = "hello world";

// function removeWhiteSpace(string) {
//   let res = "";

//   let arr = string.split(" ");

//   for (i = 0; i < string.length; i++) {
//     if (string[i] !== " ") {
//       res += string[i];
//     }
//   }
//   return res;
// }

// console.log(removeWhiteSpace(str));

//----------------------------------------

// Find the vowels (a,e,i,o,u) from the given string

// let str = "jairadhekrishna";

// function findVowels(string) {
//   let res = [];

//   for (i = 0; i < string.length; i++) {
//     let isVow = string[i];
//     if (
//       isVow === "a" ||
//       isVow === "e" ||
//       isVow === "i" ||
//       isVow === "o" ||
//       isVow === "u"
//     ) {
//       res.push(isVow);
//     }
//   }
//   return res;
// }

// console.log(findVowels(str));

//----------------------------------------

// Print each number after same second of that same no

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i]);
//   }, 1000 * i);
// }

//----------------------------------------

// Write a code for call,apply,bind

// let person = { name: "Buddy" };

// function CAB(say) {
//   console.log(`${say} ${this.name}`);
// }

// CAB.call(person, "Hi");
// CAB.apply(person, ["Hey"]);
// CAB.bind(person, "Hello")();

//--------------------------------

// Find a longest prefix in a givrn array

// First Way..

// let arr = ["flower", "flow", "flight"];

// function findLongestPrefix(ar) {
//   let prefix = arr[0];

//   for (i = 0; i < arr.length; i++) {
//     while (arr[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//     }
//   }

//   return prefix;
// }

// console.log(findLongestPrefix(arr));

//------------------------------------

// Second Way..

// let arr = ["flower", "flow", "flight"];

// function findLongestPrefix(ar) {
//   let prefix = "";

//   for (i = 0; i < arr[i].length; i++) {
//     let char = arr[0][i];

//     for (j = 1; j < arr.length; j++) {
//       if (arr[j][i] !== char) {
//         return prefix;
//       }
//     }
//     prefix += char;
//   }

//   return prefix;
// }

// console.log(findLongestPrefix(arr));

//------------------------------------

// Third Way

// let arr = ["flower", "flow", "flight", "float"];

// let res = arr.reduce((acc, curr) => {
//   let i = 0;
//   while (acc[i] === curr[i]) {
//     i++;
//   }

//   return acc.slice(0, i);
// });

// console.log(res);

//------------------------------------

// Fourth Way..

// let arr = ["flower", "flow", "flight"];

// let element = arr[0];

// let count = 0;
// for (i = 1; i < arr.length; i++) {
//   while (
//     element[count] === arr[i][count] &&
//     element[count] === arr[i + 1][count]
//   ) {
//     count++;
//   }
// }
// console.log(element.slice(0, count));

//------------------------------------------

// Flat the object

// const person = {
//   name: "shubham",
//   info: {
//     city: {
//       current: "pune",
//       Hometown: "Nanded",
//     },
//   },

//   Age: 25,
// };

// // First Way..

// const result = {};

// function flatten(obj) {
//   for (val in obj) {
//     if (typeof obj[val] === "object") {
//       flatten(obj[val]);
//     } else {
//       result[val] = obj[val];
//     }
//   }
// }
// flatten(person);
// console.log(result);

//------------------------------

// Second Way..

// function recursive(obj) {
//   for (let [key, val] of Object.entries(obj)) {
//     if (typeof val === "object") {
//       recursive(val);
//     } else {
//       result[key] = val;
//     }
//   }
// }

// recursive(person);
// console.log(result);

//------------------------------
// Print star

// let str = "";

// let timer = 0;

// for (let i = 0; i < 5; i++) {
//   str += "*";

//   timer += i;

//   function print(a) {
//     setTimeout(() => {
//       console.log(a);
//     }, 1000 * timer);
//   }
//   print(str);
// }

//------------------------

// Find the longest parentheses

// let str = "(()()";

// function longestValidParentheses(val) {
//   let res = [];

//   let arr = val.split("");
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length; j >= 0; j--) {
//       if (arr[i] === "(" && arr[j] === ")") {
//         res.push(arr[i], arr[j]);
//         arr.pop(arr[j]);
//         arr.shift(arr[i]);
//       }
//     }
//   }

//   return res.join("").length;
// }
// console.log(longestValidParentheses(str));

//------------------------
