const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isAnagram() {
  // with user prompt
  rl.question("Enter a string and Press Enter: ", (str1) => {
    let sortedStr1 = str1.toLowerCase().split("").sort().join("");
    rl.question("Now enter another string: ", (str2) => {
      let sortedStr2 = str2.toLowerCase().split("").sort().join("");
      const result = sortedStr1 === sortedStr2;
      try {
        console.log(`Is anagram? ${result}`);
      } catch (error) {
        // this is for the test case "display an error message if the function could not complete."
        throw new Error("Error");
      }
      rl.close();
    });
  });
}

isAnagram();

// without user prompt
// function isAnagram(str1, str2) {
//   // convert the strings to lower case for the same and Seam edge-case.
//   // separating each letter as an individual letter in an array with split("")
//   // sorting them alphabetically with .sort()
//   // combine them again back into a string from an array with .join('')
//   let sortedStr1 = str1.toLowerCase().split("").sort().join("");
//   let sortedStr2 = str2.toLowerCase().split("").sort().join("");
//   return sortedStr1 === sortedStr2; // this will return true or false based on if the 2 strings given are anagrams.
// }
// console.log(isAnagram("same", "Seam")); // => true
// console.log(isAnagram("hare", "hear")); // => true
// console.log(isAnagram("cat", "dog")); // => false
