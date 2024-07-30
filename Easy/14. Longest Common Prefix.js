// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (s) {
  s.sort((a, b) => b.length - a.length);
  // if the result of (b.length > a.length) is positive b should come before a Negative if a should come before b Zero if their order should not change
  const shortest = s.pop();

  let i = 0;

  for (; i < shortest.length; i++) {
    const prefix = shortest.substring(0, i + 1);
    if (s.every((x) => x.startsWith(prefix)) !== true) break;
  }

  return shortest.substring(0, i);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"]) // inters
);
