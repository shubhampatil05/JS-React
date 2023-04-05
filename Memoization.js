// Memoizatoin is optimization technique which is optimize the performance by reducing time consuption

function Num(n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    count += i;
  }

  return count;
}

// console.time()
// console.log(Num(5))
// console.timeEnd()

const Memoization = (fn) => {
  const obj = {};

  return function (args) {
    if (args in obj) {
      return obj[args];
    } else {
      let val = fn(args);
      obj[args] = val;
      return val;
    }
  };
};

const res = Memoization(Num);
console.time();
console.log(res(5));
console.timeEnd();

console.time();
console.log(res(10));
console.timeEnd();
