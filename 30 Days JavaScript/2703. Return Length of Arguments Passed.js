// ❌ Wrong Solution
var argumentsLength = function(args) {
    return args.length
};

console.log(argumentsLength(5)); // undefined

// ✅ Correct Solution
var argumentsLength = function(...args) {
    return args.length
};

console.log(argumentsLength(5)); // 1
console.log(argumentsLength({}, null, "3")); // 3