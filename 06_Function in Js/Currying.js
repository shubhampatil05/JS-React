function currying(one) {
  return function (two) {
    return function (three) {
      return function (four) {
        return one + two + three + four;
      };
    };
  };
}

console.log(currying(10)(20)(30)(40));

// thease both are same

let a = currying(10);
let b = a(20);
let c = b(30);
let d = c(40);

console.log(d);

//----------------------------------------------------

// infinite currying

function add(A) {
  return function (B) {
    if (B) {
      return add(A + B);
    } else {
      return A;
    }
  };
}
console.log(add(3)(5)(6)(8)());
