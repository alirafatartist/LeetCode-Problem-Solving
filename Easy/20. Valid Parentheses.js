// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function (s) {
  const parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i <= s.length; i++) {
    const char = s[i];
    if (s.length < 2) return false;
    if (parentheses[char]) {
      stack.push(parentheses[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length == 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("(")); // false
console.log(isValid("((")); // false
console.log(isValid("(){}}{")); // false
