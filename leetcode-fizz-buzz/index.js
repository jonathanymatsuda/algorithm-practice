/**
 * @param {number} n
 * @return {string[]}
 */
/*
Return a string array given integer n

Brainstorm:
% - mod operator,
strings indexes,
for loop -  maybe,
+= 3 += 5 - maybe,
if - divisible by 5 === buzz. divisible by 3 === fizz, divisible by 3 and 5 === fizzbuzz
create array to push values and return from function

Pseudocode:
1. Create an empty array.
2. Create for loop:
- initializor starts at 1
- condition will be set to go no greater than n-1
- final expression i++
3. Create if statement (i % 5)
- Create variable storage and set it to buzz
- Array[i] === "Buzz"
- Push value to empty array
4. Else if (i % 3)
- Create variable storage and set it to fizz
- Array[i] === "Fizz"
- push value to empty array
5. Else if (i % 15)
- Create variable storage and set it to fizzbuzz
- Array[i] === "Fizzbuzz"
- push value to empty array.
6. Else
- Create a variable storage for i
- Convert the variable to a string (using toString())
- Push i to empty array.
7. Return the storage created in step 1
*/
var fizzBuzz = function (n) {
  const output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      const divisibleBy3And5 = "FizzBuzz";
      output.push(divisibleBy3And5);
    } else if (i % 5 === 0) {
      const divisibleBy5 = "Buzz";
      output.push(divisibleBy5);
    } else if (i % 3 === 0) {
      const divisibleBy3 = "Fizz";
      output.push(divisibleBy3);
    } else {
      const everyOtherNumber = i;
      output.push(everyOtherNumber.toString());
    }
  }
  return output
};
