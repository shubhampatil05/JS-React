// Modifiers..

// 1.g
// /The "g" modifier specifies a global match.
// A global match finds all matches.

let str_1 = "Is this all is a random text";

let x_1 = /is/g;

let result_1 = x_1.exec(str_1);

console.log(result_1);

// 2.i
// The "i" modifier specifies a case-insenitive match.

let x_2 = /This/i;

let result_2 = x_2.test(str_1);
console.log(result_2);

// 3.m
// The "m" modifier specifies a multiline match.

let str_2 = "Is\nthis\nis\n?";

let x_3 = /this/;

let result_3 = x_3.test(str_2);

console.log(result_3);

// Groups

// 1. [abc]
// Find any charecter between the bracket

let string_1 = "Shubham Patil 123";

let check_1 = /[a]/g;

let output_1 = string_1.match(check_1);

console.log(output_1);

// 2.[^abc]
// Find any charecter not between the bracket

let string_2 = "Shubham Patil 123";

let check_2 = /[^a]/g;

let output_2 = string_2.match(check_2);

console.log(output_2);

// 3.[0-9]
// Find any digit between the bracket

let string_3 = "Shubham Patil 123";

let check_3 = /[123]/g;

let output_3 = string_2.match(check_3);

console.log(output_3);

// 4.[^0-9]
// Find any digit not between the bracket

let string_4 = "Shubham Patil 123";

let check_4 = /[^123]/g;

let output_4 = string_2.match(check_4);

console.log(output_4);

// 5.[x|y]
// The (x|y) expression is used to find any of the alternatives specified.
// The alternatives can be of any characters.

let string_5 = "red,green,blue,yellow,red,orange,blue,green";
let check_5 = /(red|orange)/g;
let output_5 = string_5.match(check_5);
console.log(output_5);

//--------------------------------------------------------------------------

// Metacharecters

//1.w
// The \w metacharacter matches word characters.
// A word character is a character a-z, A-Z, 0-9, including _ (underscore).

let cha_1 = "Give 100%!";

let res_1 = /\w/;

console.log(cha_1.match(res_1));

//2.W
// The \W metacharacter matches non-word characters:

console.log(cha_1.match(/\W/g));

//3.d
// The \d metacharacter matches digits from 0 to 9.

console.log(cha_1.match(/\d/g));

//4.D
// The \D metacharacter matches non-digits from 0 to 9.

console.log(cha_1.match(/\D/g));

//5.s
// A global search for whitespace characters.

let cha_2 = "This is a random text";

console.log(cha_2.match(/\s/g));

//6.
//A global search for non-whitespace characters:

console.log(cha_2.match(/\S/g));

//7.b
// Search for specified word at the beginning of a word.

console.log(cha_2.search(/\bis/));

//8.B
// Search for specified word NOT at the beginning of a word.

console.log(cha_2.search(/\Bis/));

//9.0
//The \0 metacharacter matches NUL characters.

let cha_3 = "This is \0NUL string";

console.log(cha_3.search(/\0/));

//10.n
// Search for a newline character in a string

let cha_4 = "This string starts \n new line";

console.log(cha_4.search(/\n/));

//11.f
// Search for a form feed character in a string:
let cha_5 = "where is \ffeed charecter";
console.log(cha_5.search(/\f/));

//12.r
// Search for a carriage return character in a string

let cha_6 = "where is cariage return \rcharecter";

console.log(cha_6.search(/\r/));

//13.t
// Search for a tab character in a string

let cha_7 = "where \tis tab charecter";
console.log(cha_7.search(/\t/));

//14.v
// Search for a vertical tab character in a string

let cha_8 = "Where is \vvertical tab charecter";
console.log(cha_8.search(/\v/));

//15.xxx
// The \xxx metacharacters matches the Latin character by an octal number

let cha_9 = "Where Is The Where Charecter";
console.log(cha_9.search(/\127/g));

//16.xdd
// Do a global search for the hexadecimal number 57 (W) in a string

console.log(cha_9.search(/\x57/g));

//17.xxxx
console.log(cha_9.search(/\u0057/));

//--------------------------------------------------------------------------

// Quantifiers

//1.+
// The n+ quantifier matches any string that contains at least one n.

let text = "Hello Welcome Home";
let result = /H+/g;

console.log(text.match(result));

//2.*
// The n* quantifier matches any string that contains zero or more occurrences of n.
let num = "1,100 or 1000";

console.log(num.match(/10*/g));

//3.?
// The n? quantifier matches any string that contains zero or one occurrences of n.

console.log(num.match(/10?/g));

//4.{X}
// The n{X} quantifier matches any string that contains a sequence of X n's.
// X must be a number.

console.log(num.match(/\d{4}/g));

//5.{X,Y}
//The n{X,Y} quantifier matches any string that contains a sequence of X to Y n's.
// X and Y must be a number.

console.log(num.match(/\d{1,2}/g));

//6.{x,}
// The n{X,} quantifier matches any string that contains a sequence of at least X n's.
console.log(num.match(/\d{1,}/g));

//7.$
// The n$ quantifier matches any string with n at the end of it.

let txt = "Is This His";
console.log(txt.match(/is$/));

//8.^
// The ^n quantifier matches any string with n at the beginning of it.

console.log(txt.match(/^is/i));

//9.?=
// The ?=n quantifier matches any string that is followed by a specific string n.

let txts = "Is this all there is";
console.log(txts.match(/is(?= all)/));

//10.!?
// The ?!n quantifier matches any string that is not followed by a specific string n.

// console.log(txts.match(/all(?!there)/));

console.log(txts.match(/is(?!all)/));
