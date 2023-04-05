

// JavaScript array is an object that represents a collection of similar type of elements.
// There are 3 ways to construct array in JavaScript

//1.By array literal

let fruits = ['Apple', 'Grapes', 'Orange'];

console.log(fruits);  // Print Array..

// Get output using For loop..

for (i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

};

// Get outpit using For of loop..

// for (value of fruits) {
//     console.log(value);

// };

//2.By Creating Instance Of Array Directly (using new keyword)


let Days = new Array();

Days[0] = 'Monday';
Days[1] = 'Tuesday';
Days[2] = 'Wednesday';
Days[3] = 'Thursday';
Days[4] = 'Friday';
Days[5] = 'Saturday';
Days[6] = 'Sunday';

for (value of Days) {

    console.log(value)
};

//3.By Using An Array Constructor (using new keyword)


let Social = new Array('Instagram', 'Facebook', 'Snapchat', 'Twitter', 'Skype');

for (i = 0; i < Social.length; i++) {

    console.log(Social[i]);

};