var compose = function (functions) {
  return function (x) {
    let n = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      n = functions[i](n);
    }
    return n;
  };
};

let functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let composed = compose(functions);

console.log(composed(4)); // 65

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
