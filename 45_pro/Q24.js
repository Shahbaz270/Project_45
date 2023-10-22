"use strict";
let string1 = "apple";
let string2 = "banana";
let num1 = 20;
let num2 = 30;
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
// Tests for equality and inequality with strings
console.log("Is string1 equal to 'apple'? I predict True.");
console.log(string1 === "apple");
console.log("Is string2 not equal to 'apple'? I predict True.");
console.log(string2 !== "apple");
// Tests using the lower case function
console.log("Is string1 equal to 'APPLE' in lowercase? I predict True.");
console.log(string1.toLowerCase() === "apple");
console.log("Is string2 equal to 'Banana' in lowercase? I predict False.");
console.log(string2.toLowerCase() === "banana");
// Numerical tests
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2);
console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);
console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);
// Tests using "and" and "or" operators
console.log("Is num1 greater than 10 and num2 less than 40? I predict True.");
console.log(num1 > 10 && num2 < 40);
console.log("Is num1 less than 15 or num2 greater than 35? I predict True.");
console.log(num1 < 15 || num2 > 35);
// Test whether an item is in an array
console.log("Is 3 in array1? I predict True.");
console.log(array1.includes(3));
console.log("Is 7 in array1? I predict False.");
console.log(array1.includes(7));
// Test whether an item is not in an array
console.log("Is 6 not in array2? I predict True.");
console.log(!array2.includes(6));
console.log("Is 9 not in array2? I predict False.");
console.log(!array2.includes(9));
