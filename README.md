# Is Anagram?

In language of your choosing write a program with a single function to determine if 2 strings supplied by the user are anagrams.  Make the program as robust as possible to accommodate imperfect user input.  The interface should prompt the user to:  “Enter a string and Press Enter”   (wait for user input)  “Now enter another string”  (wait for input)  Display True if the 2 strings are anagrams, false if not, display an error message if the function could not complete. Then start over.

sample results: 
```
isAnagram("same", "Seam") // => true
isAnagram("hare", "hear") // => true
isAnagram("cat", "dog") // => false
```

# With Prompt/Interface:
```
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function isAnagram() {
  rl.question("Enter a string and Press Enter: ", (str1) => {
    let sortedStr1 = str1.toLowerCase().split("").sort().join("");
    rl.question("Now enter another string: ", (str2) => {
      let sortedStr2 = str2.toLowerCase().split("").sort().join("");
      const result = sortedStr1 === sortedStr2;
      try {
        console.log(`Is anagram? ${result}`);
      } catch (error) {
        throw new Error("Error");
      }
      rl.close();
    });
  });
}

isAnagram();
```

<br />

# Bonus - Without Prompt:
```
function isAnagram(str1, str2) {
  // convert the strings to lower case for the same and Seam edge-case.
  // separating each letter as an individual letter in an array with split("")
  // sorting them alphabetically with .sort()
  // combine them again back into a string from an array with .join('')
  let sortedStr1 = str1.toLowerCase().split("").sort().join("");
  let sortedStr2 = str2.toLowerCase().split("").sort().join("");
  return sortedStr1 === sortedStr2; // this will return true or false based on if the 2 strings given are anagrams.
}
console.log(isAnagram("same", "Seam")); // => true
console.log(isAnagram("hare", "hear")); // => true
console.log(isAnagram("cat", "dog")); // => false
```
