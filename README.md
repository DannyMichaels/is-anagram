# Is Anagram?

In language of your choosing write a program with a single function to determine if 2 strings supplied by the user are anagrams.  Make the program as robust as possible to accommodate imperfect user input.  The interface should prompt the user to:  “Enter a string and Press Enter”   (wait for user input)  “Now enter another string”  (wait for input)  Display True if the 2 strings are anagrams, false if not, display an error message if the function could not complete.    Then start over.

```
function isAnagram() {
  rl.question("Please enter the first string: ", (str1) => {
    let sortedStr1 = str1.toLowerCase().split("").sort().join("");
    rl.question("Please enter the second string: ", (str2) => {
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
