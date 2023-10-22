// Storing the person's name in a variable
const personName2: string = "Ayan Ghauri";

// Printing the name in lowercase
console.log("Lowercase:", personName2.toLowerCase());

// Printing the name in uppercase
console.log("Uppercase:", personName2.toUpperCase());

// Printing the name in titlecase
const titleCaseName = personName2
  .toLowerCase()
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

console.log("Titlecase:", titleCaseName);
