// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

var addBinary = function (a, b) {
  let val1 = BigInt(`0b${a}`); // convert bin string to BigInt
  let val2 = BigInt(`0b${b}`); // convert bin string to BigInt
  return (val1 + val2).toString(2); // add BigInts and convert back to bin string
};

console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"
console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
); // "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
