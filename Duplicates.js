// Find unique value

let Numbers = [1, 2, 3, 4, 5, 5, 6, 6, 1, 3, 4];

let Unique = Array.from(new Set(Numbers));

console.log(Unique);

// Find Duplicate

// let Duplicate = Numbers.filter((item,index)=>index!=Numbers.indexOf(item))
// console.log(Duplicate)

// using some

let Duplicate = Numbers.some((item, index) => index != Numbers.indexOf(item));

if (Duplicate == true) {
  console.log("Array contain duplicates");
} else {
  consoel.log("Array doesn't contain duplicates");
}

// Using has();

let Uniq = new Set(Numbers);

let _Duplicates = Numbers.filter((value) => {
  if (Uniq.has(value)) {
    Uniq.delete(value);
  } else {
    return value;
  }
});

console.log(_Duplicates);

// Using loop..

let isDuplicate = false;

for (i = 0; i < Numbers.length; i++) {
  for (j = 0; j < Numbers.length; j++) {
    if (i != j) {
      if (Numbers[i] === Numbers[j]) {
        isDuplicate = true;
        break; // terminate inner loop
      }
    }
  }

  if (isDuplicate != true) {
    break; // tereminate outer loop
  }
}

if (isDuplicate == true) {
  console.log("Array contain duplicates");
} else {
  console.log("Array doesn't contain duplicates");
}
